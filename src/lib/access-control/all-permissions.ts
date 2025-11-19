/**
 * Used by both client & server
 */

import { PermissionUnion } from "@/types/permissions";

export const allPermissions = {
    // better auth level perms
    user: ["create", "list", "set-role", "ban", "impersonate", "delete", "set-password", "unban"],
    session: ["list", "revoke", "delete"],

    // custom perms
    appointments: [
        "create",
        "list_all",
        "list_own",
        "mark_as_paid",
        "mark_as_finished",
        "change_date",
    ],
    messages: ["list_all"],
    subscriptions: ["list_all"],
} as const;

// Resulting type
export type Permission = PermissionUnion<typeof allPermissions>;
