const Problem = () => {
    const problems = [
        {
            title: "Prices Don't Make Sense",
            description:
                "You see a car listed for a high price, but you don't know why. Is it actually worth that much? You're left guessing.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M10.5 1.5H5.75A2.75 2.75 0 003 4.25v11.5A2.75 2.75 0 005.75 18.5h8.5A2.75 2.75 0 0017 15.75V9.5m-15-4h10m-10 3h10m-10 3h7" />
                    <path
                        d="M16 2v6m0 0l-2-2m2 2l2-2"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                    />
                </svg>
            ),
            color: "from-red-50 to-orange-50",
            borderColor: "border-red-200",
            textColor: "text-red-700",
        },
        {
            title: "No One Tells You the Truth",
            description:
                "The seller won't tell you if the car was in an accident, had engine problems, or has hidden damage. You have to trust their word.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            color: "from-amber-50 to-yellow-50",
            borderColor: "border-amber-200",
            textColor: "text-amber-700",
        },
        {
            title: "You Find Out Too Late",
            description:
                "You buy the car thinking it's fine. A month later, the engine breaks or you discover the odometer was fake. Now it's too late.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        fillRule="evenodd"
                        d="M13.477 14.89A6 6 0 15.047 6.584A1 1 0 016.584 5.047a6 6 0 118.893 8.893zM9 16a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            color: "from-pink-50 to-rose-50",
            borderColor: "border-pink-200",
            textColor: "text-rose-700",
        },
        {
            title: "It's Like Flipping a Coin",
            description:
                "Buying a second-hand car feels like pure luck. You're spending your money on a big gamble with no real facts to help you decide.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4z" />
                    <path
                        fillRule="evenodd"
                        d="M18 9a2 2 0 00-2-2h-1V4a2 2 0 00-4 0v3h-2V4a2 2 0 00-4 0v3H2a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2V9zM4 13a1 1 0 11-2 0 1 1 0 012 0zm12-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            color: "from-purple-50 to-indigo-50",
            borderColor: "border-purple-200",
            textColor: "text-purple-700",
        },
    ];

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 py-16 gap-12 md:px-8">
                <div className="space-y-12 max-w-4xl mx-auto text-center">
                    <div className="space-y-4">
                        <h2 className="text-balance text-4xl text-gray-800 font-semibold md:text-5xl">
                            Finding a second-hand car shouldn&rsquo;t be this hard
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
                            As a buyer, you&rsquo;re stuck in a broken system. You want to find a
                            good car at a fair price, but everyone around you seems to be hiding
                            something.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {problems.map((problem, idx) => (
                            <div
                                key={idx}
                                className={`bg-gradient-to-br ${problem.color} border ${problem.borderColor} rounded-lg p-6 text-left transition-all duration-300 cursor-default`}
                            >
                                <div className={`flex items-center gap-3 mb-4`}>
                                    <div className={`p-3 rounded-lg bg-white ${problem.textColor}`}>
                                        {problem.icon}
                                    </div>
                                    <h3 className={`text-xl font-bold ${problem.textColor}`}>
                                        {problem.title}
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-gray-800 text-lg">
                            <span className="font-bold text-red-700">You end up stressed.</span> You
                            overpay for a car you&rsquo;re not sure about. You worry every time
                            something sounds wrong. You wish you had real facts before spending your
                            money.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
