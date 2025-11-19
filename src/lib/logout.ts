"use client";

import { authClient } from "./auth-client";

export default function logoutUser() {
    authClient.signOut({
        fetchOptions: {
            onSuccess: () => {
                window.location.href = "/login";
            },
        },
    });
}
