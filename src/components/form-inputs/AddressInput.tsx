"use client";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { getAddressAutoCompletions } from "@/data-access/getAddressAutoCompletions";
import { useDebounceValue } from "@/hooks/use-debounce-value";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface AddressInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}

export default function AddressInput({
    value,
    onChange,
    placeholder,
    disabled,
}: AddressInputProps) {
    // Immediate visible input for instant typing, plus a debounced value used for the query.
    const [raw, setRaw] = useState<string>(value || "");
    // debouncedQuery is the value we use to trigger the address autocomplete network request
    const [debouncedQuery, setDebouncedQuery] = useDebounceValue(raw, 300);

    // Keep local raw state in sync if parent value changes (for controlled usage)
    useEffect(() => {
        setRaw(value || "");
        setDebouncedQuery(value || "");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["address-autocomplete", debouncedQuery],
        queryFn: () => getAddressAutoCompletions(debouncedQuery),
        placeholderData: (prev) => prev,
    });

    const predictions = data?.predictions || [];

    return (
        <Command className="w-full">
            <CommandInput
                className="text-foreground border-input flex w-full rounded-md border bg-background shadow-xs outline-none  disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive px-5! py-5! h-14 text-xl!"
                value={raw}
                onValueChange={(val) => {
                    setRaw(val);
                    setDebouncedQuery(val);
                    if (val === "") onChange("");
                }}
                placeholder={placeholder || "Enter address"}
                disabled={disabled}
            />
            <CommandList>
                {isFetching && <CommandItem disabled>Loading...</CommandItem>}
                {!isLoading && predictions.length === 0 && (
                    <CommandEmpty>No addresses found</CommandEmpty>
                )}
                <CommandGroup>
                    {predictions.map((prediction) => {
                        const mainText =
                            prediction.placePrediction?.structuredFormat?.mainText?.text ||
                            prediction.placePrediction?.text?.text ||
                            "";
                        const secondaryText =
                            prediction.placePrediction?.structuredFormat?.secondaryText?.text || "";
                        const fullText = mainText + (secondaryText ? ", " + secondaryText : "");
                        return (
                            <CommandItem
                                key={fullText}
                                value={fullText}
                                onSelect={() => {
                                    setRaw(fullText);
                                    setDebouncedQuery(fullText);
                                    onChange(fullText);
                                }}
                                className="flex flex-col items-start"
                            >
                                <span className="font-medium">{mainText}</span>
                                {secondaryText && (
                                    <span className="text-xs text-muted-foreground">
                                        {secondaryText}
                                    </span>
                                )}
                            </CommandItem>
                            // <div key={mainText}>{secondaryText}</div>
                        );
                    })}
                </CommandGroup>
            </CommandList>
        </Command>
    );
}
