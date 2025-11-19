"use server";

import db from "@/db/client"; // Adjust path to your db instance
import { waitlist } from "@/db/schema";
import { insertWaitlistSchema } from "@/validation/db";

export async function addToWaitlist(data: unknown) {
    try {
        const parsed = insertWaitlistSchema.parse(data);

        await db.insert(waitlist).values(parsed);

        return { success: true, message: "You have been added to the waitlist!" };
    } catch (error) {
        console.error("Waitlist Error:", error);
        return { success: false, message: "Failed to join waitlist. Please check your inputs." };
    }
}
