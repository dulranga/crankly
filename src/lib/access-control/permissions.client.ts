import { authClient } from "../auth-client";
import { Permission } from "./all-permissions";

export async function hasPermissionClient<T extends Permission>(permission: T) {
    type Parts = T extends `${infer Resource}:${infer Action}`
        ? [Resource, Action]
        : never;

    const [resource, action] = permission.split(":") as Parts;

    const { data, error } = await authClient.admin.hasPermission({
        permissions: {
            [resource]: [action],
        },
    });

    if (error) {
        return false;
    }
    if (data.success) {
        return true;
    }
}
