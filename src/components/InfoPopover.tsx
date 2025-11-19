import { FC } from "react";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { InfoIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface InfoPopoverProps {
    title?: React.ReactNode;
    description: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

const InfoPopover: FC<InfoPopoverProps> = ({
    title,
    description,
    icon,
    className,
}) => (
    <Popover>
        <PopoverTrigger asChild>
            <Button
                variant="ghost"
                asChild
                size={"icon"}
                className={cn(
                    "md:size-6 size-4 text-muted-foreground",
                    className
                )}
            >
                {icon ?? <InfoIcon />}
            </Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-[300px] text-sm space-y-2" side="top">
            {title && <p className="font-medium">{title}</p>}
            <p className="text-muted-foreground">{description}</p>
        </PopoverContent>
    </Popover>
);

export default InfoPopover;
