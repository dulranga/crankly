import "server-only";

import { hasPermissionServer } from "../access-control/permissions.server";
import findNavItemByUrl from "./findNavItemByUrl";
import { NavItem, navMainItems } from "./sidebarNavItems";

/**
 * Checks if a navigation item is allowed to be accessed based on required permissions.
 *
 * This function evaluates both general and organization-specific permissions for the given
 * navigation item. It asynchronously checks all required permissions and returns `true`
 * only if all checks pass.
 *
 * @param navItem - The navigation item to check access for. It may contain arrays of required permissions.
 * @returns A promise that resolves to `true` if the user has all required permissions, otherwise `false`.
 */
export async function isPageAllowed(navItem: NavItem): Promise<boolean> {
    let allowed = true;

    if (navItem.requiredPermissions) {
        const checks = await Promise.all(
            navItem.requiredPermissions.map((p) =>
                hasPermissionServer(p).catch(() => false)
            )
        );
        allowed = allowed && checks.every(Boolean);
    }

    return allowed;
}

export async function checkDashboardPageAccess(url: string): Promise<boolean> {
    const item = findNavItemByUrl(navMainItems, url);
    if (!item) return true; // no config → public page

    const allowed = await isPageAllowed(item);

    return allowed;
}
