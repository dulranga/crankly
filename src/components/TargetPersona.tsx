const TargetPersona = () => {
    const personas = [
        {
            title: "First-Time Bike Buyers",
            description:
                "You don't know what to look for. Don't let someone else's problem become yours.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                    <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    >
                        <path d="M2 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0m14 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-8.5-2h5l4-4H6m1.5 4l4-4" />
                        <path d="M13 6h2l1.5 3l2 4" />
                    </g>
                </svg>
            ),
            bgColor1: "#F5F8FB",
            bgColor2: "#E8F1F8",
            borderColor: "#EFF6FC",
            textColor: "#4B7A9C",
        },
        {
            title: "Families Buying a Used Car",
            description:
                "You want your family safe. Know if that car has hidden problems before you drive them in it.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                    <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    >
                        <path d="M5 17a2 2 0 1 0 4 0a2 2 0 0 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0M5 9l2-4h7.438a2 2 0 0 1 1.94 1.515L17 9h3a2 2 0 0 1 2 2v3M10 9V5M2 7v4" />
                        <path d="M22.001 14.001A5 5 0 0 0 18 12a5 5 0 0 0-4 2h-3a4.998 4.998 0 0 0-8.003.003" />
                        <path d="M5 12V9h13" />
                    </g>
                </svg>
            ),
            bgColor1: "#F5F8FB",
            bgColor2: "#E8F1F8",
            borderColor: "#EFF6FC",
            textColor: "#4B7A9C",
        },
        {
            title: "Resellers & Dealers",
            description: "Know the real value. Buy smarter. Flip for real profit, not just luck.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M12.825 22.825L2 12V2h10l10.8 10.85zm0-2.825l7.15-7.15L11.15 4H4v7.15zM6.5 8q.625 0 1.063-.437T8 6.5t-.437-1.062T6.5 5t-1.062.438T5 6.5t.438 1.063T6.5 8m5.5 4"
                    />
                </svg>
            ),
            bgColor1: "#F5F8FB",
            bgColor2: "#E8F1F8",
            borderColor: "#EFF6FC",
            textColor: "#4B7A9C",
        },
        {
            title: "Classic Car Collectors",
            description:
                "Verify authenticity. Know the real story of every classic before adding it to your collection.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M6 19v2H3v-9l2.45-7h13.1L21 12v9h-3v-2zm-.2-9h12.4l-1.05-3H6.85zM5 12v5zm2.5 4q.625 0 1.063-.437T9 14.5t-.437-1.062T7.5 13t-1.062.438T6 14.5t.438 1.063T7.5 16m9 0q.625 0 1.063-.437T18 14.5t-.437-1.062T16.5 13t-1.062.438T15 14.5t.438 1.063T16.5 16M5 17h14v-5H5z"
                    />
                </svg>
            ),
            bgColor1: "#F5F8FB",
            bgColor2: "#E8F1F8",
            borderColor: "#EFF6FC",
            textColor: "#4B7A9C",
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
                                style={{
                                    background: `linear-gradient(135deg, ${persona.bgColor1} 0%, ${persona.bgColor2} 100%)`,
                                    borderColor: persona.borderColor,
                                }}
                                className={`border-2 rounded-lg p-6 text-left cursor-default`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        style={{
                                            backgroundColor: persona.bgColor1,
                                            color: persona.textColor,
                                            borderColor: persona.borderColor,
                                        }}
                                        className={`p-3 rounded-lg border-2`}
                                    >
                                        {persona.icon}
                                    </div>
                                    <h3
                                        style={{ color: persona.textColor }}
                                        className={`text-xl font-bold`}
                                    >
                                        {persona.title}
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {persona.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div
                        style={{
                            background: `linear-gradient(135deg, #F5F8FB 0%, #E8F1F8 100%)`,
                            borderColor: "#EFF6FC",
                        }}
                        className="mt-8 p-6 border-2 rounded-lg"
                    >
                        <p className="text-gray-800 text-lg">
                            <span style={{ color: "#4B7A9C" }} className="font-bold">
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
