import { NavItem } from "./sidebarNavItems";

export default function findNavItemByUrl(
    items: NavItem[],
    url: string
): NavItem | undefined {
    for (const item of items) {
        // check children first
        if (item.items) {
            for (const child of item.items) {
                if (child.url === url) {
                    return child; // smallest scope: just the child
                }
            }
        }

        // check parent only if no child matched
        if (item.url === url) {
            return item;
        }
    }

    return undefined;
}
