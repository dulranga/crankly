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
    metadataBase: new URL("https://crankly.io"),
    title: {
        default: "Crankly | Smart Second-Hand Vehicle Intelligence for Sri Lanka",
        template: "%s | Crankly",
    },
    description:
        "Make smarter second-hand vehicle purchases in Sri Lanka. Get accident reports, service records, fair pricing, and real owner reviews. Buy with confidence, not doubt.",
    keywords: [
        "second-hand cars Sri Lanka",
        "used vehicles Sri Lanka",
        "car history reports",
        "vehicle accident history",
        "fair car pricing",
        "buy used car safely",
        "motorcycle history",
        "three-wheeler reports",
        "vehicle verification Sri Lanka",
        "car buyer confidence",
    ],
    authors: [{ name: "Crankly" }],
    creator: "Crankly",
    publisher: "Crankly",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Crankly | Smart Second-Hand Vehicle Intelligence for Sri Lanka",
        description:
            "Make smarter second-hand vehicle purchases in Sri Lanka. Get accident reports, service records, fair pricing, and real owner reviews.",
        url: "https://crankly.io",
        siteName: "Crankly",
        locale: "en_LK",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Crankly - Smart Vehicle Intelligence for Sri Lanka",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Crankly | Smart Second-Hand Vehicle Intelligence for Sri Lanka",
        description:
            "Make smarter second-hand vehicle purchases in Sri Lanka. Get accident reports, service records, fair pricing, and real owner reviews.",
        images: ["/og-image.jpg"],
        creator: "@cranklyapp",
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
        canonical: "https://crankly.io",
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
