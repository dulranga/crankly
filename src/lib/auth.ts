//! this is temporarily disabled for the schema gen in better-auth to work
//! should be turned on when deploying to prod
// import "server-only";

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin } from "better-auth/plugins";
import db from "@/db/client";
import * as schema from "@/db/schema";
import { accessControl, roles } from "./access-control/ac-system";

// better auth
export const auth = betterAuth({
    appName: "Glify",
    logger: {
        disabled: false,
        level: "error",
        log: (level, message, ...args) => {
            // Custom logging implementation
            console.log(`[Better Auth] [${level}] ${message}`, ...args);
        },
    },
    database: drizzleAdapter(db, {
        provider: "pg",
        usePlural: true,
        schema: {
            ...schema,
        },
    }),
    emailAndPassword: {
        enabled: true,
        signUp: {
            enabled: true,
            fields: ["email", "password", "name"],
        },
        login: {
            enabled: true,
            fields: ["email", "password"],
        },
    },
    // socialProviders: {
    //     google: {
    //         enabled: true,
    //         clientId: process.env.GOOGLE_ID!,
    //         clientSecret: process.env.GOOGLE_SECRET!,
    //     },
    // },

    advanced: {
        cookiePrefix: "glify",
    },
    trustedOrigins: [
        "http://localhost:3011",
        "https://dev.glifycleaningservices.com.au/",
        "https://glifycleaningservices.com.au/",
    ],

    plugins: [
        admin({
            ac: accessControl,
            roles: roles,
        }),
    ],
});
