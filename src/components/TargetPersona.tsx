const TargetPersona = () => {
    const personas = [
        {
            title: "First-Time Bike Buyers",
            description:
                "You don't know what to look for. Don't let someone else's problem become yours.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 1 1 0 000 2h.263l1.708 8.54a2 2 0 001.967 1.58h2.124a2 2 0 001.967-1.58L13.737 7h.263a1 1 0 000-2 2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3.707 9.293a1 1 0 000 1.414L9.414 17l-1.707 1.707a1 1 0 001.414 1.414L10.828 18.414l1.707 1.707a1 1 0 001.414-1.414L12.242 17l1.707-1.707a1 1 0 00-1.414-1.414L10.828 15.586l-1.707-1.707a1 1 0 00-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            color: "from-blue-50 to-blue-100",
            borderColor: "border-blue-300",
            textColor: "text-blue-700",
            bgIcon: "bg-blue-200",
        },
        {
            title: "Families Buying a Used Car",
            description:
                "You want your family safe. Know if that car has hidden problems before you drive them in it.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        fillRule="evenodd"
                        d="M7 2a1 1 0 011 1v1h2V3a1 1 0 112 0v1h2V3a1 1 0 112 0v1a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2v1a1 1 0 11-2 0v-1h-2v1a1 1 0 11-2 0v-1a2 2 0 01-2-2v-2H4a1 1 0 110-2h1V9H4a1 1 0 110-2h1V5a2 2 0 012-2V3a1 1 0 011-1zm5 4a1 1 0 10-2 0 1 1 0 002 0zm-4 2a1 1 0 10-2 0 1 1 0 002 0zm2 2a1 1 0 10-2 0 1 1 0 002 0zm4 0a1 1 0 10-2 0 1 1 0 002 0z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            color: "from-green-50 to-green-100",
            borderColor: "border-green-300",
            textColor: "text-green-700",
            bgIcon: "bg-green-200",
        },
        {
            title: "Resellers & Dealers",
            description: "Know the real value. Buy smarter. Flip for real profit, not just luck.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            color: "from-orange-50 to-orange-100",
            borderColor: "border-orange-300",
            textColor: "text-orange-700",
            bgIcon: "bg-orange-200",
        },
        {
            title: "Classic Car Collectors",
            description:
                "Verify authenticity. Know the real story of every classic before adding it to your collection.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M10.5 1.5H5.75A2.75 2.75 0 003 4.25v11.5A2.75 2.75 0 005.75 18.5h8.5A2.75 2.75 0 0017 15.75V9.5" />
                    <path
                        d="M9 9l2 2m0 0l2-2m-2 2v-4"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                    />
                </svg>
            ),
            color: "from-purple-50 to-purple-100",
            borderColor: "border-purple-300",
            textColor: "text-purple-700",
            bgIcon: "bg-purple-200",
        },
    ];

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 py-16 gap-12 md:px-8">
                <div className="space-y-12 max-w-4xl mx-auto text-center">
                    <div className="space-y-4">
                        <h2 className="text-balance text-4xl text-gray-800 font-semibold md:text-5xl">
                            Built for every Sri Lankan buyer
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
                            Whether you&rsquo;re buying your first bike, a family car, building a
                            business, or collecting classics, Crankly is here to help you make smart
                            decisions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {personas.map((persona, idx) => (
                            <div
                                key={idx}
                                className={`bg-gradient-to-br ${persona.color} border-2 ${persona.borderColor} rounded-lg p-6 text-left transition-all duration-300 hover:shadow-lg cursor-default`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className={`p-3 rounded-lg ${persona.bgIcon} ${persona.textColor}`}
                                    >
                                        {persona.icon}
                                    </div>
                                    <h3 className={`text-xl font-bold ${persona.textColor}`}>
                                        {persona.title}
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {persona.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 bg-indigo-50 border border-indigo-200 rounded-lg">
                        <p className="text-gray-800 text-lg">
                            <span className="font-bold text-indigo-700">
                                No matter who you are,
                            </span>{" "}
                            if you&rsquo;re buying a second-hand vehicle in Sri Lanka, Crankly makes
                            you a smarter buyer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetPersona;
