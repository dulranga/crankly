import { Features } from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import WaitList from "@/components/Waitlist";

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://glifycleaningservices.com.au/#organization",
            name: "Glify Cleaning Services",
            url: "https://glifycleaningservices.com.au",
            logo: {
                "@type": "ImageObject",
                url: "https://glifycleaningservices.com.au/logo.png",
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+61481346932",
                contactType: "customer service",
                availableLanguage: "English",
            },
            address: {
                "@type": "PostalAddress",
                addressLocality: "Berwick",
                addressRegion: "Victoria",
                postalCode: "3806",
                addressCountry: "AU",
            },
            email: "info@glifycleaningservices.com",
            sameAs: ["https://facebook.com/glify", "https://instagram.com/glify_cleaning_services"],
        },
        {
            "@type": "LocalBusiness",
            "@id": "https://glifycleaningservices.com.au/#localbusiness",
            name: "Glify Cleaning Services",
            image: "https://glifycleaningservices.com.au/logo.png",
            telephone: "+61481346932",
            email: "info@glifycleaningservices.com",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Berwick",
                addressRegion: "Victoria",
                postalCode: "3806",
                addressCountry: "AU",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: -38.0347,
                longitude: 145.3527,
            },
            url: "https://glifycleaningservices.com.au",
            priceRange: "$115-$1299",
            openingHoursSpecification: [
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                    ],
                    opens: "08:00",
                    closes: "17:00",
                },
            ],
            serviceArea: {
                "@type": "Place",
                name: "Melbourne, Victoria, Australia",
            },
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Cleaning Services",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Standard Cleaning",
                            description: "Regular house cleaning service",
                        },
                        priceSpecification: {
                            "@type": "PriceSpecification",
                            minPrice: "115",
                            priceCurrency: "AUD",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Deep Cleaning",
                            description: "Thorough deep cleaning service",
                        },
                        priceSpecification: {
                            "@type": "PriceSpecification",
                            minPrice: "220",
                            priceCurrency: "AUD",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "End of Lease Cleaning",
                            description: "Move-out cleaning service",
                        },
                        priceSpecification: {
                            "@type": "PriceSpecification",
                            minPrice: "359",
                            priceCurrency: "AUD",
                        },
                    },
                ],
            },
        },
        {
            "@type": "WebSite",
            "@id": "https://glifycleaningservices.com.au/#website",
            url: "https://glifycleaningservices.com.au",
            name: "Glify Cleaning Services",
            description: "Professional cleaning services in Melbourne",
        },
    ],
};

export const metadata = {
    title: "Glify Cleaning Melbourne | Book Trusted Cleaners",
    description:
        "Book trusted house cleaning services in Melbourne with Glify. Fast quotes, easy booking, and satisfaction guaranteed for every clean.",
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
            <div className="space-y-14 lg:space-y-20">
                <HeroSection />
                <WaitList />
                <Features />
            </div>
        </>
    );
}
