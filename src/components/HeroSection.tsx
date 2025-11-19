import { Button } from "./ui/button";

const HeroSection = () => {
    const features = [
        {
            name: "Fully Transparent",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "Over 50+ videos",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "400 ratings",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ];

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 py-16 gap-12 text-gray-600 md:px-8 ">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <div className="flex flex-wrap items-center justify-center gap-6 ">
                        {features.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-x-2 text-gray-500 text-sm"
                            >
                                {item.icon}
                                {item.name}
                            </div>
                        ))}
                    </div>
                    <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                        Sri Lanka’s <span className="underline">first</span> truth-checking platform
                        for second-hand vehicles.
                    </h1>
                    <p className="max-w-xl mx-auto ">
                        We reveal real historical facts about any vehicle - past social media posts,
                        accidents, previous buyer feedback, and more... so you know exactly what
                        you’re paying for.
                    </p>
                    <div className="items-center flex-col justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 ">
                        <form
                            // onSubmit={(e) => e.preventDefault()}
                            className="flex items-center justify-center rounded-lg p-1 sm:mx-auto border w-full max-w-md"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="text-gray-500 w-full p-2 outline-none"
                            />
                            <Button className="p-2 px-3 rounded-lg font-medium duration-150 outline-none shadow-md focus:shadow-none sm:px-4 whitespace-nowrap">
                                Get Early Access
                            </Button>
                        </form>
                        <p className="mt-3 max-w-lg sm:mx-auto">Early users get free credits</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
