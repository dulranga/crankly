import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { 
  waitlist, 
  vehicles, 
  ratings, 
  comments, 
  accessGrants, 
  unlockedVehicles, 
  ratingReactions,
  accessGrantStatusEnum
} from '../db/schema'; // Adjust import path to match your file structure

// ==========================================
// 0. Waitlist Schemas
// ==========================================

// Base schema
export const selectWaitlistSchema = createSelectSchema(waitlist);

// Insert: Handle the "at least one contact method" logic
export const insertWaitlistSchema = createInsertSchema(waitlist, {
  email: z.string().email().optional().nullable(),
  whatsapp: z.string().min(1).optional().nullable(),
  telephone: z.string().min(1).optional().nullable(),
}).omit({
  id: true,
  createdAt: true
}).refine((data) => data.email || data.whatsapp || data.telephone, {
  message: "You must provide at least one contact method: Email, WhatsApp, or Telephone.",
  path: ["email"], // Attaches error to email field form-wise
});

// Update
export const updateWaitlistSchema = insertWaitlistSchema.partial();


// ==========================================
// 1. Vehicle Schemas
// ==========================================

export const selectVehicleSchema = createSelectSchema(vehicles);

export const insertVehicleSchema = createInsertSchema(vehicles, {
  licensePlate: z.string().min(1).max(20).transform((val) => val.toUpperCase()),
  year: z.number().int().min(1900).max(new Date().getFullYear() + 1),
  make: z.string().min(1),
  model: z.string().min(1),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  createdBy: true, // Handled by auth middleware
  averageRating: true, // Calculated field
  ratingCount: true,   // Calculated field
});

export const updateVehicleSchema = insertVehicleSchema.partial();


// ==========================================
// 2. Rating (Review) Schemas
// ==========================================

export const selectRatingSchema = createSelectSchema(ratings);

export const insertRatingSchema = createInsertSchema(ratings, {
  score: z.number().int().min(1).max(5),
  content: z.string().min(10, "Review content must be at least 10 characters long."),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  createdBy: true, // Handled by auth middleware
  thumbsUpCount: true, // Calculated field
});

export const updateRatingSchema = insertRatingSchema.partial();


// ==========================================
// 3. Rating Reaction Schemas
// ==========================================

export const selectRatingReactionSchema = createSelectSchema(ratingReactions);

export const insertRatingReactionSchema = createInsertSchema(ratingReactions).omit({
  createdAt: true,
  createdBy: true, // Handled by auth middleware
});

export const deleteRatingReactionSchema = z.object({
  ratingId: z.number().int(),
});


// ==========================================
// 4. Comment Schemas
// ==========================================

export const selectCommentSchema = createSelectSchema(comments);

export const insertCommentSchema = createInsertSchema(comments, {
  body: z.string().min(1, "Comment cannot be empty."),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  createdBy: true, // Handled by auth middleware
});

export const updateCommentSchema = insertCommentSchema.partial();


// ==========================================
// 5. Access Grant Schemas
// ==========================================

export const selectAccessGrantSchema = createSelectSchema(accessGrants);

// Usually created by system after payment webhook, but useful for admin
export const insertAccessGrantSchema = createInsertSchema(accessGrants, {
  grantedUsage: z.number().int().positive(),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  createdBy: true, // Handled by auth middleware or admin logic
  usedUsage: true, // Defaults to 0
  status: true,    // Defaults to ACTIVE
});

export const updateAccessGrantSchema = createInsertSchema(accessGrants).pick({
  status: true,
  grantedUsage: true,
}).partial();


// ==========================================
// 6. Unlocked Vehicle Schemas
// ==========================================

export const selectUnlockedVehicleSchema = createSelectSchema(unlockedVehicles);

export const insertUnlockedVehicleSchema = createInsertSchema(unlockedVehicles).omit({
  id: true,
  createdAt: true,
  createdBy: true, // Handled by auth middleware
});

// Types based on schemas
export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type InsertVehicle = z.infer<typeof insertVehicleSchema>;
export type InsertRating = z.infer<typeof insertRatingSchema>;
export type InsertComment = z.infer<typeof insertCommentSchema>;
export type InsertAccessGrant = z.infer<typeof insertAccessGrantSchema>;