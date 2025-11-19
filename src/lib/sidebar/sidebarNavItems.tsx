import { CalendarCheckIcon, CircleDollarSign, MessageCircleMoreIcon } from "lucide-react";
import { ReactNode } from "react";
import { Permission } from "../access-control/all-permissions";

export type NavItem = {
    title: string;
    icon?: ReactNode;
    url?: string;
    isActive?: boolean;
    requiredPermissions?: Permission[];

    items?: {
        title: string;
        url: string;
        requiredPermissions?: Permission[];
    }[];
};

export const navMainItems: NavItem[] = [
    {
        title: "Appointments",
        icon: <CalendarCheckIcon />,
        isActive: true,
        items: [
            {
                title: "Appointments",
                url: "/dashboard/appointments",
                requiredPermissions: ["appointments:list_own"],
            },
        ],
    },
    {
        title: "Transactions",
        icon: <CircleDollarSign />,
        isActive: true,
        items: [
            {
                title: "All Subscriptions",
                url: "/dashboard/transactions/subscriptions",
                requiredPermissions: ["subscriptions:list_all"],
            },
        ],
    },
    {
        title: "Messages",
        icon: <MessageCircleMoreIcon />,
        isActive: true,
        items: [
            {
                title: "Contact Messages",
                url: "/dashboard/messages",
                requiredPermissions: ["messages:list_all"],
            },
        ],
    },
];
