import { createAccessControl, Role as BetterAuthRole } from "better-auth/plugins/access";
import { Role } from "./roles";
import { allPermissions } from "./all-permissions";

export const accessControl = createAccessControl(allPermissions);

export const roles: Record<Role, BetterAuthRole> = {
    admin: accessControl.newRole({
        user: ["create", "list", "set-role", "ban", "unban"],
        appointments: [
            "create",
            "list_all",
            "list_own",
            "mark_as_finished",
            "mark_as_paid",
            "change_date",
        ],
        messages: ["list_all"],
        subscriptions: ["list_all"],
    }),
    user: accessControl.newRole({
        appointments: [],
    }),
};
