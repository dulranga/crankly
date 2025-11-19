import { isPageAllowed } from "./checkDashboardPageAccess";
import { NavItem } from "./sidebarNavItems";

export default async function filterNavItems(
    items: NavItem[]
): Promise<NavItem[]> {
    const result: NavItem[] = [];

    for (const item of items) {
        const allowed = await isPageAllowed(item);
        if (!allowed) continue;

        let filteredChildren;
        if (item.items) {
            filteredChildren = [];
            for (const child of item.items) {
                const childAllowed = await isPageAllowed(child);
                if (childAllowed) filteredChildren.push(child);
            }
        }

        result.push({ ...item, items: filteredChildren });
    }

    return result;
}
