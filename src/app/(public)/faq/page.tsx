import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACT_EMAIL, CONTACT_NUMBER } from "@/consts/contacts";

export const metadata = {
    title: "FAQ | Glify Cleaning Melbourne",
    description:
        "Find answers to common questions about Glify's cleaning services, booking process, and policies. Get the information you need for a smooth experience.",
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What cleaning services does Glify offer?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Glify offers standard cleaning, deep cleaning, end-of-lease cleaning, and commercial cleaning services in Melbourne.",
            },
        },
        {
            "@type": "Question",
            name: "How do I book a cleaning service?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You can book online through our quotation system or contact us directly. We provide fast quotes and easy booking.",
            },
        },
        {
            "@type": "Question",
            name: "Are your cleaners insured?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all our professional cleaners are fully insured and bonded for your peace of mind.",
            },
        },
        {
            "@type": "Question",
            name: "What areas do you service?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We provide cleaning services throughout Melbourne and surrounding areas.",
            },
        },
    ],
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
                name: "FAQ",
                item: "https://glifycleaningservices.com.au/faq",
            },
        ],
    },
};

export default function Page() {
    return (
        <>
            <script
                id="structured-data-faq"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData).replace(/</g, "\u003c"),
                }}
            />
            <div className="container mx-auto px-4 grid gap-6">
                <section className="container mx-auto space-y-6 py-20">
                    <header className="grid place-items-center text-center gap-6 text-balance">
                        <h1 className="heading-2">
                            Frequently Asked <span className="text-primary">Questions</span>
                        </h1>
                        <p className="max-w-prose">
                            “Find quick answers to common questions about our cleaning services,
                            booking process, and policies. We’ve made it simple to help you get the
                            information you need.”
                        </p>
                    </header>

                    <Accordion
                        type="multiple"
                        className="w-full"
                        defaultValue={["what-areas-do-you-service"]}
                    >
                        {faqs.map((faq, i) => (
                            <AccordionItem value={faq.id} key={faq.id}>
                                <AccordionTrigger className="text-lg" id={faq.id}>
                                    {i + 1}. {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base ml-5">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
            </div>
        </>
    );
}
const faqs = [
    {
        id: "what-areas-do-you-service",
        question: "What areas do you service?",
        answer: (
            <p>
                We provide cleaning services across Melbourne and surrounding suburbs. Please
                contact us with your location to confirm availability.
            </p>
        ),
    },
    {
        id: "types-of-cleaning-offered",
        question: "What types of cleaning do you offer?",
        answer: (
            <div>
                <p>We offer:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Regular Cleaning</li>
                    <li>Deep Cleaning</li>
                    <li>End of Lease Cleaning</li>
                    <li>Window Cleaning</li>
                    <li>Oven/Fridge/Grill Cleaning</li>
                    <li>Add-on Services (as per client needs)</li>
                </ul>
            </div>
        ),
    },
    {
        id: "how-to-book-cleaning-service",
        question: "How do I book a cleaning service?",
        answer: (
            <p className="[&_a]:underline [&_a]:font-bold">
                You can book a service by calling us at{" "}
                <a href={`tel:${CONTACT_NUMBER}`}>{CONTACT_NUMBER}</a>, emailing{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or via our website{" "}
                <a href="http://glifycleaningservices.com.au">glifycleaningservices.com.au</a>.
            </p>
        ),
    },
    {
        id: "insured-and-registered",
        question: "Are you insured and registered?",
        answer: (
            <p>
                Yes, Glify Cleaning Services is a <b>fully registered and insured business</b>,
                ensuring peace of mind for all our clients.
            </p>
        ),
    },
    {
        id: "cleaning-products-provided",
        question: "Do I need to provide cleaning products?",
        answer: (
            <p>
                No. Our team brings all necessary cleaning equipment and products. If you have
                special preferences or eco-friendly products, let us know in advance.
            </p>
        ),
    },
    {
        id: "pet-friendly",
        question: "Are you pet-friendly?",
        answer: (
            <p>
                Yes! We love pets and can work around them during cleaning. Please ensure pets are
                safe and comfortable during our visit.
            </p>
        ),
    },
    {
        id: "cancellation-policy",
        question: "What is your cancellation policy?",
        answer: (
            <p>
                We require at least <b>48 hours notice</b> for cancellations.{" "}
                <b>We do not offer refunds</b>, but we are happy to discuss rescheduling to another
                date.
            </p>
        ),
    },
    {
        id: "service-guarantee",
        question: "Do you offer a service guarantee?",
        answer: (
            <p>
                Yes. If you are not satisfied with any part of our cleaning, notify us within 24
                hours and we will arrange a <b>re-clean at no extra cost</b>.
            </p>
        ),
    },
    {
        id: "payment-methods",
        question: "How do I pay for your services?",
        answer: (
            <p>
                Payments can be made via <b>bank transfer (EFT)</b>, credit/debit card, or other
                arrangements agreed upon at booking. Payment is requested{" "}
                <b>48 hours before the scheduled cleaning</b>.
            </p>
        ),
    },
    {
        id: "recurring-service-discounts",
        question: "Do you offer discounts for recurring services?",
        answer: (
            <p>
                Yes! We offer discounts for regular cleaning schedules, such as weekly or
                fortnightly services. Contact us for details.
            </p>
        ),
    },
];
