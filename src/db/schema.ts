// import "server-only";

export * from "./schemas/auth-schema";

import {
    pgTable,
    serial,
    text,
    integer,
    timestamp,
    numeric,
    pgEnum,
    primaryKey,
    uniqueIndex,
    check
} from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';
import { users } from "./schemas/auth-schema";

// --- Enums ---
export const accessGrantStatusEnum = pgEnum('access_grant_status', ['ACTIVE', 'EXHAUSTED']);

// --- 0. Waitlist ---
export const waitlist = pgTable('waitlist', {
    id: serial('id').primaryKey(),
    email: text('email'),
    whatsapp: text('whatsapp'),
    telephone: text('telephone'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
}, (t) => ({
    // Constraint: Ensures that at least one of the three fields is not null
    contactMethodCheck: check(
        'contact_method_check',
        sql`${t.email} IS NOT NULL OR ${t.whatsapp} IS NOT NULL OR ${t.telephone} IS NOT NULL`
    )
}));

// --- 1. Vehicle ---
export const vehicles = pgTable('vehicles', {
    id: serial('id').primaryKey(),
    licensePlate: text('license_plate').notNull().unique(),
    make: text('make').notNull(),
    model: text('model').notNull(),
    year: integer('year').notNull(),

    // Aggregates
    averageRating: numeric('average_rating', { precision: 2, scale: 1 }).default('0.0'),
    ratingCount: integer('rating_count').default(0),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()),
    createdBy: text('created_by').notNull().references(() => users.id, { onDelete: "cascade" }),
});

// --- 2. Rating (Review) ---
export const ratings = pgTable('ratings', {
    id: serial('id').primaryKey(),
    vehicleId: integer('vehicle_id').references(() => vehicles.id, { onDelete: 'cascade' }).notNull(),

    score: integer('score').notNull(), // 1 to 5
    content: text('content').notNull(), // Gated Content

    thumbsUpCount: integer('thumbs_up_count').default(0),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()),
    createdBy: text('created_by').notNull().references(() => users.id, { onDelete: "cascade" }),
});

// --- 3. Rating Reaction (Thumbs Up on Review) ---
export const ratingReactions = pgTable('rating_reactions', {
    ratingId: integer('rating_id').references(() => ratings.id, { onDelete: 'cascade' }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    createdBy: text('created_by').notNull().references(() => users.id, { onDelete: "cascade" }),
}, (t) => ({
    pk: primaryKey({ columns: [t.ratingId, t.createdBy] }),
}));

// --- 4. Comment (Simple Thread) ---
export const comments = pgTable('comments', {
    id: serial('id').primaryKey(),
    ratingId: integer('rating_id').references(() => ratings.id, { onDelete: 'cascade' }).notNull(),

    body: text('body').notNull(),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()),
    createdBy: text('created_by').notNull().references(() => users.id, { onDelete: "cascade" }),
});

// --- 5. Access Grant (Wallet) ---
export const accessGrants = pgTable('access_grants', {
    id: serial('id').primaryKey(),
    grantedUsage: integer('granted_usage').notNull(),
    usedUsage: integer('used_usage').default(0).notNull(),
    status: accessGrantStatusEnum('status').default('ACTIVE').notNull(),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()),
    createdBy: text('created_by').notNull().references(() => users.id, { onDelete: "cascade" }),
});

// --- 6. Unlocked Vehicle (Ledger) ---
export const unlockedVehicles = pgTable('unlocked_vehicles', {
    id: serial('id').primaryKey(),
    vehicleId: integer('vehicle_id').references(() => vehicles.id).notNull(),
    accessGrantId: integer('access_grant_id').references(() => accessGrants.id).notNull(),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    createdBy: text('created_by').notNull().references(() => users.id, { onDelete: "cascade" }),
}, (t) => ({
    uniqueUnlock: uniqueIndex('unique_user_vehicle_unlock').on(t.vehicleId, t.createdBy),
}));

// --- Relations ---

export const vehiclesRelations = relations(vehicles, ({ many }) => ({
    ratings: many(ratings),
}));

export const ratingsRelations = relations(ratings, ({ one, many }) => ({
    vehicle: one(vehicles, {
        fields: [ratings.vehicleId],
        references: [vehicles.id],
    }),
    comments: many(comments),
    reactions: many(ratingReactions),
}));

export const ratingReactionsRelations = relations(ratingReactions, ({ one }) => ({
    rating: one(ratings, {
        fields: [ratingReactions.ratingId],
        references: [ratings.id],
    }),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
    rating: one(ratings, {
        fields: [comments.ratingId],
        references: [ratings.id],
    }),
}));

export const accessGrantsRelations = relations(accessGrants, ({ many }) => ({
    unlockedVehicles: many(unlockedVehicles),
}));

export const unlockedVehiclesRelations = relations(unlockedVehicles, ({ one }) => ({
    vehicle: one(vehicles, {
        fields: [unlockedVehicles.vehicleId],
        references: [vehicles.id],
    }),
    grant: one(accessGrants, {
        fields: [unlockedVehicles.accessGrantId],
        references: [accessGrants.id],
    }),
}));