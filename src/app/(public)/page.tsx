import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Problem from "@/components/Problem";
import TargetPersona from "@/components/TargetPersona";
import WaitList from "@/components/Waitlist";

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://crankly.io/#organization",
            name: "Crankly",
            url: "https://crankly.io",
            logo: {
                "@type": "ImageObject",
                url: "https://crankly.io/logo.png",
            },
            contactPoint: {
                "@type": "ContactPoint",
                email: "hello@crankly.io",
                contactType: "customer service",
                availableLanguage: "English",
            },
            address: {
                "@type": "PostalAddress",
                addressCountry: "LK",
            },
            sameAs: [
                "https://facebook.com/crankly",
                "https://instagram.com/crankly",
                "https://twitter.com/cranklyapp",
            ],
        },
        {
            "@type": "WebApplication",
            "@id": "https://crankly.io/#webapp",
            name: "Crankly",
            url: "https://crankly.io",
            description:
                "Smart second-hand vehicle intelligence platform for Sri Lanka. Get accident reports, service records, fair pricing, and owner reviews.",
            applicationCategory: "UtilitiesApplication",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "LKR",
                description: "Free access to vehicle intelligence reports",
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1250",
            },
        },
        {
            "@type": "WebSite",
            "@id": "https://crankly.io/#website",
            url: "https://crankly.io",
            name: "Crankly",
            description:
                "Smart second-hand vehicle intelligence for Sri Lanka. Make confident vehicle purchase decisions with real data.",
            potentialAction: {
                "@type": "SearchAction",
                target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://crankly.io/search?q={search_term_string}",
                },
                query_input: "required name=search_term_string",
            },
        },
    ],
};

export const metadata = {
    title: "Crankly | Smart Second-Hand Vehicle Intelligence for Sri Lanka",
    description:
        "Make smarter second-hand vehicle purchases in Sri Lanka. Get accident reports, service records, fair pricing, and real owner reviews. Buy with confidence.",
};
export default function Home() {
    return (
        <>
            <script
                id="structured-data-homepage"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData).replace(/</g, "\u003c"),
                }}
            />
            <div className="space-y-6">
                <HeroSection />
                <Problem />
                <Features />
                <TargetPersona />
                <WaitList />
            </div>
        </>
    );
}
