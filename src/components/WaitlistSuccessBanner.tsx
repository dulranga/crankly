"use client";

import { useLocalStorage } from "@/hooks/use-local-storage";
import { useEffect, useState } from "react";

export default function WaitlistSuccessBanner() {
    const [isWaitlistMember, _, isLoaded] = useLocalStorage("waitlist_member", false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isLoaded && isWaitlistMember) {
            setIsVisible(true);
        }
    }, [isLoaded, isWaitlistMember]);

    if (!isVisible) return null;

    return (
        <div className="z-50 bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg fixed bottom-0 left-0 w-full">
            <div className="max-w-fit mx-auto px-4 py-4 md:py-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 flex-shrink-0"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.373l-4.144 4.038 .978 5.704c.186 1.08-.695 1.905-1.704 1.905-.39 0-.782-.125-1.122-.39l-4.451-3.038-4.451 3.038c-.34.265-.733.39-1.122.39-.81 0-1.89-.825-1.704-1.905l.978-5.704L1.126 10.487c-.887-.828-.415-2.28.749-2.373l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <div>
                        <p className="font-bold text-lg">You&rsquo;re on the waitlist!</p>
                        <p className="text-sm text-green-50">
                            We&rsquo;ll notify you as soon as we launch. Thanks for your interest!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
