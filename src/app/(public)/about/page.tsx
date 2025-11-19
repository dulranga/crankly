import image from "@/assets/images/cleaning-guy.svg";
import star from "@/assets/images/star2.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "About Glify | Professional Cleaning Services Melbourne",
    description:
        "Learn about Glify Cleaning Services - Melbourne's trusted professional cleaners. Discover our story, values, and commitment to exceptional cleaning services.",
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Glify Cleaning Services",
    description:
        "Learn about Glify Cleaning Services - Melbourne's trusted professional cleaners. Discover our story, values, and commitment to exceptional cleaning services.",
    mainEntity: {
        "@type": "Organization",
        name: "Glify Cleaning Services",
        url: "https://glifycleaningservices.com.au",
        description:
            "Professional cleaning services provider in Melbourne, specializing in residential and commercial cleaning solutions.",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Berwick",
            addressRegion: "Victoria",
            postalCode: "3806",
            addressCountry: "AU",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+61481346932",
            email: "info@glifycleaningservices.com",
            contactType: "customer service",
        },
    },
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://glifycleaningservices.com.au",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://glifycleaningservices.com.au/about",
            },
        ],
    },
};

export default function AboutPage() {
    return (
        <>
            <script
                id="structured-data-about"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData).replace(/</g, "\u003c"),
                }}
            />
            <div className="space-y-14 lg:space-y-20 lg:my-20 my-5">
                <div className="container mx-auto grid gap-6 md:gap-12 lg:gap-16 lg:grid-cols-2 lg:pt-20 place-items-center bg-tertiary rounded-3xl p-5 ">
                    <div className="text-secondary-foreground grid gap-3 md:gap-6 md:p-16 text-center md:text-left place-items-center md:place-items-start">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
                            Welcome To Glify –
                            <br />
                            Your Trusted Cleaning Partner In Melbourne!
                        </h1>
                        <p className="lg:text-lg text-black/80">
                            At Glify, we believe a clean home is a happy home. Founded with a
                            passion for excellence and a commitment to customer satisfaction, Glify
                            is proud to offer top-quality house cleaning services tailored to the
                            needs of Melbourne..
                        </p>
                        <Button asChild size={"lg"} variant={"default"} className="w-fit">
                            <Link href={"/quotation"}>Get Quote</Link>
                        </Button>
                    </div>
                    <div className="relative w-full h-full min-h-52 place-self-stretch order-first lg:order-last ">
                        <Image src={image} alt="Cleaning Guy" fill />
                    </div>
                </div>
                <section className="max-w-7xl mx-auto space-y-6 px-4 grid md:grid-cols-2 gap-5">
                    <InfoCard
                        clipPath="url(#contactCard)"
                        title="Our Mission"
                        description="Our mission is simple: to provide reliable, thorough, and affordable cleaning services that make your life easier and your home healthier. We strive to exceed your expectations every time we clean, leaving your space sparkling and fresh."
                    />
                    <InfoCard
                        title="Our Story"
                        clipPath="url(#contactCardFlipped)"
                        description="Glify was founded to offer honest, dependable cleaning services in Melbourne. We wanted to provide a service that combined professionalism with a personal touch, unlike other companies that offered inconsistent quality or impersonal service. "
                    />
                </section>
                <section className="container mx-auto space-y-6 px-4">
                    <div className="my-8 grid">
                        <h2 className="heading-2">Why Choose Glify Cleaning?</h2>
                        <p className="text-base md:text-lg mt-4 md:text-balance opacity-60">
                            “Reach out to Glify Cleaning Services today and let our dedicated team
                            take care of all your cleaning needs. We provide reliable, high-quality
                            services so you can enjoy your free time stress-free, relax, and focus
                            on the things that matter most.”
                        </p>
                    </div>
                    <AboutHighlightCard
                        title="Locally Owned & Operated:"
                        description="We are proud members of the Melbourne community and understand the unique needs of our neighbors. Space for keys, mail, homework, and other items."
                    />
                    <AboutHighlightCard
                        title="Trustworthy Team:"
                        description="Our professional cleaners are fully trained, background-checked, and dedicated to delivering exceptional results."
                    />
                    <AboutHighlightCard
                        title="Eco-Friendly Practices:"
                        description="We use environmentally friendly cleaning products that are safe for your family, pets, and the planet."
                    />
                    <AboutHighlightCard
                        title="Flexible Scheduling:"
                        description="We work around your busy life, offering convenient appointment times including weekends."
                    />
                </section>
                <section className="container mx-auto md:space-y-16 space-y-5 px-4">
                    <div className="grid md:flex md:justify-between w-full">
                        <div className="heading-2 hidden md:block">Read Our Privacy Policy</div>
                        <Button variant={"tertiary"} size={"lg"} asChild>
                            <Link href={"/privacy-policy"}>View Privacy policy</Link>
                        </Button>
                    </div>
                    <div className="grid md:flex md:justify-between w-full">
                        <div className="heading-2 hidden md:block">Read Our Payment Policy</div>
                        <Button variant={"tertiary"} size={"lg"} asChild>
                            <Link href={"/payment-policy"}>View Payment policy</Link>
                        </Button>
                    </div>
                </section>
                <svg
                    width="0"
                    height="0"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden lg:block"
                >
                    <clipPath
                        id="contactCard"
                        clipPathUnits="objectBoundingBox"
                        transform="scale(0.003279, 0.003731)"
                    >
                        <path d="M32.2493 0L275.117 14.1671L280.039 14.8754L284.681 16.2959L288.986 18.3689L292.899 21.0344L296.363 24.2325L299.323 27.9036L301.723 31.9876L303.506 36.4247L304.617 41.1551L305 46.1189V235.199L304.581 240.393L303.37 245.32L301.43 249.915L298.829 254.11L295.632 257.841L291.906 261.042L287.715 263.646L283.126 265.588L278.205 266.801L273.017 267.22H31.9828L26.795 266.801L21.8737 265.588L17.2849 263.646L13.0942 261.042L9.36754 257.841L6.17082 254.11L3.56986 249.915L1.6305 245.32L0.418601 240.393L0 235.199L0 32.0209L0.418601 26.827L1.6305 21.8998L3.56986 17.3055L6.17082 13.1098L9.36754 9.37871L13.0942 6.17818L17.2849 3.57412L21.8737 1.63245L26.795 0.4191L31.9828 0V0H32.1115H32.2176H32.3009H32.3616H32.3996H32.4149H32.4075H32.3775H32.3247H32.2493Z" />
                    </clipPath>
                </svg>
                <svg
                    width="0"
                    height="0"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden lg:block"
                >
                    <clipPath
                        id="contactCardFlipped"
                        clipPathUnits="objectBoundingBox"
                        transform="scale(0.003279, 0.003731)"
                    >
                        <path d="M32.2493 13.8329L275.117 0L280.039 0.708293L284.681 2.12884L288.986 4.20178L292.899 6.86727L296.363 10.0655L299.323 13.7365L301.723 17.8205L303.506 22.2576L304.617 26.988L305 31.9518V235.032L304.581 240.226L303.37 245.153L301.43 249.747L298.829 253.943L295.632 257.674L291.906 260.875L287.715 263.479L283.126 265.42L278.205 266.634L273.017 267.053H31.9828L26.795 266.634L21.8737 265.42L17.2849 263.479L13.0942 260.875L9.36754 257.674L6.17082 253.943L3.56986 249.747L1.6305 245.153L0.418601 240.226L0 235.032L0 45.8538L0.418601 40.6599L1.6305 35.7328L3.56986 31.1384L6.17082 26.9427L9.36754 23.2116L13.0942 20.0111L17.2849 17.407L21.8737 15.4654L26.795 14.252L31.9828 13.8329H32.1115H32.2176H32.3009H32.3616H32.3996H32.4149H32.4075H32.3775H32.3247H32.2493Z" />
                    </clipPath>
                </svg>
            </div>
        </>
    );
}

interface AboutHighlightCardProps {
    title: string;
    description: string;
}

const AboutHighlightCard: React.FC<AboutHighlightCardProps> = ({ title, description }) => {
    return (
        <Card className="bg-tertiary rounded-3xl">
            <CardContent>
                <div className="font-semibold">{title}</div>
                <div>{description}</div>
            </CardContent>
        </Card>
    );
};

interface InfoCardProps {
    title: string;
    description: string;
    clipPath: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, description, clipPath }) => {
    return (
        <div
            className="text-black bg-secondary  px-8 py-10 rounded-[50px] w-full h-full"
            style={{ clipPath }}
        >
            <Image src={star} width={60} height={60} alt="Icon" />

            <div className="text-2xl font-medium my-4">{title}</div>
            <div className="text-lg">{description}</div>
        </div>
    );
};
