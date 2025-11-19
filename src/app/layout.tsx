import { Toaster } from "@/components/ui/sonner";
import { isMobileDevice } from "@/lib/isMobileDevice";
import DeviceProvider from "@/services/providers/DeviceProvider";
import { QueryClientProvider } from "@/services/providers/query-client-provider";
import type { Metadata } from "next";
import { Inconsolata, Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

const interMono = Inconsolata({
    variable: "--font-inter-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://glifycleaningservices.com.au"),
    title: {
        default: "Glify Cleaning Melbourne | Professional House Cleaning Services",
        template: "%s | Glify Cleaning Melbourne",
    },
    description:
        "Professional house cleaning services in Melbourne. Book trusted, reliable cleaners for standard, deep, and end-of-lease cleaning. Satisfaction guaranteed.",
    keywords: [
        "house cleaning Melbourne",
        "professional cleaners Melbourne",
        "cleaning services Melbourne",
        "end of lease cleaning",
        "deep cleaning",
        "standard cleaning",
        "domestic cleaning",
        "home cleaning",
        "cleaning company Melbourne",
        "reliable cleaners",
    ],
    authors: [{ name: "Glify Cleaning Services" }],
    creator: "Glify Cleaning Services",
    publisher: "Glify Cleaning Services",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Glify Cleaning Melbourne | Professional House Cleaning Services",
        description:
            "Professional house cleaning services in Melbourne. Book trusted, reliable cleaners for standard, deep, and end-of-lease cleaning. Satisfaction guaranteed.",
        url: "https://glifycleaningservices.com.au",
        siteName: "Glify Cleaning Services",
        locale: "en_AU",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Glify Cleaning Services - Professional House Cleaning in Melbourne",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Glify Cleaning Melbourne | Professional House Cleaning Services",
        description:
            "Professional house cleaning services in Melbourne. Book trusted, reliable cleaners for standard, deep, and end-of-lease cleaning.",
        images: ["/og-image.jpg"],
        creator: "@glifycleaning",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        // google: "your-google-verification-code", // Add your Google Search Console verification
        // bing: "your-bing-verification-code", // Add if using Bing Webmaster Tools
    },
    alternates: {
        canonical: "https://glifycleaningservices.com.au",
    },
    icons: [
        {
            rel: "apple-touch-icon",
            type: "image/png",
            sizes: "180x180",
            url: "/apple-touch-icon.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon-16x16.png",
        },
        { rel: "manifest", url: "/site.webmanifest" },
    ],
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isMobile = await isMobileDevice();

    return (
        <html lang="en">
            <body className={`${interSans.variable} ${interMono.variable} antialiased`}>
                <DeviceProvider isMobile={isMobile}>
                    <QueryClientProvider>{children}</QueryClientProvider>
                </DeviceProvider>
                <Toaster />
            </body>
        </html>
    );
}
