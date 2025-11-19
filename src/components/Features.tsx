const Features = () => {
    const features = [
        {
            title: "See Accident & Repair Records",
            description:
                "We find accident reports and repair records tied to the car. You see what actually happened so there are no surprises.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.5 2a1.5 1.5 0 00-1.5 1.5v3H2a1 1 0 000 2h.6l.933 6.517A2 2 0 004.5 16h11a2 2 0 001.967-1.983l.933-6.517H18a1 1 0 000-2h-2V3.5A1.5 1.5 0 0014.5 2h-9zm2 4V3.5a.5.5 0 01.5-.5h6a.5.5 0 01.5.5V6h-7zm10 2H3.395l.933 6.517A1 1 0 004.5 15h11a1 1 0 00.972-.966L15.5 8z"
                        clipRule="evenodd"
                    />
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
                "We search past social media posts and reviews about the car. See what previous owners and buyers really think about it.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                    <path
                        fillRule="evenodd"
                        d="M3 8a1 1 0 011-1h12a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm5 4a2 2 0 104 0 2 2 0 00-4 0z"
                        clipRule="evenodd"
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
            description:
                "If someone looked at this car and decided not to buy it, you see their reasons. Learn from other buyers' experiences.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0z"
                        clipRule="evenodd"
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
                "Armed with real facts, you can talk to sellers on equal ground. You know the car's true value. Most sellers even lower their price.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
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
                                className={`bg-gradient-to-br ${feature.color} border ${feature.borderColor} rounded-lg p-6 text-left transition-all duration-300 hover:shadow-md cursor-default`}
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
