"use client";

import {
    QueryClient,
    QueryClientProvider as TanStackQueryClientProvider,
} from "@tanstack/react-query";
import * as React from "react";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 1000 * 60 * 5, // 5 minutes
        },
    },
});

export function QueryClientProvider({
    children,
    ...props
}: React.PropsWithChildren) {
    return (
        <TanStackQueryClientProvider {...props} client={queryClient}>
            {children}
        </TanStackQueryClientProvider>
    );
}
