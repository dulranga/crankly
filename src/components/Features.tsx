const Features = () => {
    const features = [
        {
            title: "See Accident & Repair Records",
            description: "Every accident. Every repair. No surprises when you own it.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 16 16">
                    <g fill="currentColor">
                        <path d="M9.5 0a.5.5 0 0 1 .5.5a.5.5 0 0 0 .5.5a.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 0 .5-.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                        <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793L6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                    </g>
                </svg>
            ),
            color: "from-blue-50 to-cyan-50",
            borderColor: "border-blue-200",
            textColor: "text-blue-700",
            bgIcon: "bg-blue-100",
        },
        {
            title: "Find What People Said Online",
            description:
                "What did previous owners actually say? See the real reviews and social media posts.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M18 .75a5.225 5.225 0 0 0-3.937 8.689l-.657 3.78l3.423-2.111a5.244 5.244 0 0 0 6.176-6.705A5.25 5.25 0 0 0 18 .75M3.375 13.125a3.375 3.375 0 1 0 6.75 0a3.375 3.375 0 0 0-6.75 0M12.75 23.25a6.054 6.054 0 0 0-12 0"
                    />
                </svg>
            ),
            color: "from-green-50 to-emerald-50",
            borderColor: "border-green-200",
            textColor: "text-green-700",
            bgIcon: "bg-green-100",
        },
        {
            title: "Read Why Buyers Walked Away",
            description: "Why did others pass on it? Learn from their decision before you commit.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 15 15">
                    <path
                        fill="currentColor"
                        d="m4.1 9.7l-.3.4l.8.6l.3-.4zm6 .6l.3.4l.8-.6l-.3-.4zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM4 6h1V5H4zm6 0h1V5h-1zm.9 3.7c-1.7-2.267-5.1-2.267-6.8 0l.8.6a3.25 3.25 0 0 1 5.2 0z"
                    />
                </svg>
            ),
            color: "from-orange-50 to-amber-50",
            borderColor: "border-orange-200",
            textColor: "text-orange-700",
            bgIcon: "bg-orange-100",
        },
        {
            title: "Negotiate with Confidence",
            description:
                "You know the facts. You know the real value. Sellers lower their price when they can't hide anymore.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 20 20">
                    <path
                        fill="currentColor"
                        d="M4.5 5.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0M6.75 2.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5M1.5 12a2 2 0 0 1 2-2H10a2 2 0 0 1 .993.263q-.416.346-.758.765A1 1 0 0 0 10 11H3.5a1 1 0 0 0-1 1v.078l.007.083a2.95 2.95 0 0 0 .498 1.336C3.492 14.201 4.513 15 6.75 15c.954 0 1.687-.145 2.252-.367q.013.525.12 1.02C8.476 15.87 7.695 16 6.75 16c-2.513 0-3.867-.92-4.568-1.934a3.95 3.95 0 0 1-.67-1.807a3 3 0 0 1-.012-.175zM13 6.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M14.5 4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"
                    />
                </svg>
            ),
            color: "from-purple-50 to-violet-50",
            borderColor: "border-purple-200",
            textColor: "text-purple-700",
            bgIcon: "bg-purple-100",
        },
    ];

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 py-16 gap-12 md:px-8">
                <div className="space-y-12 max-w-4xl mx-auto text-center">
                    <div className="space-y-4">
                        <h2 className="text-balance text-4xl text-gray-800 font-semibold md:text-5xl">
                            What you get with Crankly
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
                            We give you the real facts about any car. No guessing. No surprises.
                            Just the truth so you can make a smart decision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className={`bg-gradient-to-br ${feature.color} border ${feature.borderColor} rounded-lg p-6 text-left cursor-default`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className={`p-3 rounded-lg ${feature.bgIcon} ${feature.textColor}`}
                                    >
                                        {feature.icon}
                                    </div>
                                    <h3 className={`text-xl font-bold ${feature.textColor}`}>
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-gray-800 text-lg">
                            <span className="font-bold text-green-700">The result?</span> You buy
                            with confidence. You know what you&rsquo;re paying for. You save money
                            by negotiating a better price.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
