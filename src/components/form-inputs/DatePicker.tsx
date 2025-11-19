"use client";

import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "../ui/input";
import { Matcher } from "react-day-picker";

type DatePickerProps = {
    disabledRange?: Matcher;
    id?: string;
    onChange?: (date: Date | undefined) => void;
    onBlur?: () => void;
    value?: Date | undefined;
};

export function DatePicker({ disabledRange, id, onChange, onBlur, value }: DatePickerProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="relative">
                    <Input
                        id={id}
                        className="pointer-events-none select-none"
                        value={
                            value
                                ? value.toLocaleDateString("fr", {
                                      dateStyle: "medium",
                                  })
                                : "Select date"
                        }
                    />

                    <ChevronDownIcon
                        size={16}
                        opacity={0.5}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    />
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                <Calendar
                    endMonth={new Date(new Date().getFullYear() + 1, 12)}
                    onDayBlur={onBlur}
                    mode="single"
                    selected={value}
                    disabled={disabledRange}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                        onChange?.(date);
                    }}
                />
            </PopoverContent>
        </Popover>
    );
}
