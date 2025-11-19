import "server-only";

import { getUser } from "@/data-access/getCurrentUser";
import { auth } from "../auth";
import { Permission } from "./all-permissions";
import { Role } from "./roles";

export async function hasPermissionServer<T extends Permission>(permission: T) {
    type Parts = T extends `${infer Resource}:${infer Action}` ? [Resource, Action] : never;

    const [resource, action] = permission.split(":") as Parts;

    const user = await getUser();

    const data = await auth.api.userHasPermission({
        body: {
            userId: user.id,
            role: user.role as Role, // server-only
            permissions: {
                [resource]: [action],
            },
        },
    });

    return data.success;
}
