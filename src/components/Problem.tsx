const Problem = () => {
    const problems = [
        {
            title: "Prices Don't Make Sense",
            description: "Why is it so expensive? You have no idea.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path d="m8.23 22l4.9-4.9l3.5 3.5l5.6-5.6" />
                        <path d="M16.73 15h5.5v5.5m-7.783-7.246A7.187 7.187 0 1 0 10 16.024M8.687 5.957v-2m0 10v-2" />
                        <path d="M10.937 7.457v-.5a1 1 0 0 0-1-1h-2.5a1 1 0 0 0-1 1v.447a1 1 0 0 0 .783.977l2.933.652a1 1 0 0 1 .784.976v.947a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1v-.5" />
                    </g>
                </svg>
            ),
            color: "from-red-50 to-orange-50",
            borderColor: "border-red-200",
            textColor: "text-red-700",
        },
        {
            title: "Sellers don't tell You the Truth",
            description: "Hidden accidents. Hidden damage. You only get their side of the story.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M12.025 20.35q-.35 0-.687-.125t-.613-.375Q8 17.45 6.3 15.812t-2.662-2.874t-1.3-2.263T2 8.5q0-2.3 1.6-3.9T7.5 3q1.65 0 2.9.637t.9 1.838l-.925 3.25q-.125.5.163.888t.787.387H13l-.65 6.35q-.025.2.163.225t.237-.15L14.6 10.3q.15-.5-.15-.9t-.8-.4H12l1.525-4.525Q13.8 3.6 14.675 3.3T16.5 3q2.3 0 3.9 1.6T22 8.5q0 1.1-.4 2.175t-1.388 2.375t-2.65 2.938t-4.212 3.862q-.275.25-.625.375t-.7.125"
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
                "Engine fails. Odometer was fake. Now you're stuck with a broken car and no recourse.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                    <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                    >
                        <path d="M14.25 21a2.249 2.249 0 1 0 4.498 0a2.249 2.249 0 0 0-4.498 0m-10.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m10.632.75H8.118" />
                        <path d="M3.881 21.75H2.25a1.5 1.5 0 0 1-1.5-1.5v-1.5a3 3 0 0 1 3-3l1.835-3.671a1.5 1.5 0 0 1 1.342-.829h4.9a1.5 1.5 0 0 1 1.342.829L15 15.75h5.25a3 3 0 0 1 3 3v1.5a1.5 1.5 0 0 1-1.5 1.5h-3.13m-3.62-6H3.75" />
                        <path d="m15 15.75l4.5-4.5h3m0-3.75a2.45 2.45 0 0 1-.75-1.841c0-1.227 1.5-1.841 1.5-3.068A2.45 2.45 0 0 0 22.5.75M18 9a2.45 2.45 0 0 1-.75-1.841c0-1.227 1.5-1.841 1.5-3.068A2.45 2.45 0 0 0 18 2.25" />
                    </g>
                </svg>
            ),
            color: "from-pink-50 to-rose-50",
            borderColor: "border-pink-200",
            textColor: "text-rose-700",
        },
        {
            title: "It's Like Flipping a Coin",
            description: "No facts. No data. Just a blind bet with your money.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 14 14">
                    <g fill="none" stroke="currentColor" strokeLinecap="round">
                        <path
                            strokeLinejoin="round"
                            d="M7.08 11.827a1.55 1.55 0 0 0 1.361 1.364c.529.059 1.072.11 1.625.11c.554 0 1.096-.051 1.625-.11a1.55 1.55 0 0 0 1.361-1.364c.056-.526.104-1.066.104-1.616s-.048-1.09-.104-1.616a1.55 1.55 0 0 0-1.36-1.364a15 15 0 0 0-1.626-.11c-.553 0-1.096.051-1.625.11a1.55 1.55 0 0 0-1.36 1.364a15 15 0 0 0-.104 1.616c0 .55.047 1.09.103 1.616"
                        />
                        <path d="M8.954 10.852v.48m2.178-2.461v.48" />
                        <path
                            strokeLinejoin="round"
                            d="M9.425 5.083c-.33-1.234-.782-2.398-1.196-3.519A1.04 1.04 0 0 0 7.123.897c-.964.123-1.974.232-2.97.499c-.996.266-1.924.677-2.82 1.052A1.04 1.04 0 0 0 .707 3.58c.201 1.177.393 2.411.723 3.645s.782 2.398 1.196 3.518a1.04 1.04 0 0 0 1.107.668c.472-.06.955-.117 1.443-.191m6.672-6.081c.135-.694.246-1.38.361-2.048a1.04 1.04 0 0 0-.625-1.131c-.465-.195-.94-.4-1.427-.589"
                        />
                        <path
                            strokeLinejoin="round"
                            d="M6.971 5.727L4.93 4.247L3.902 6.55L5.32 7.597"
                        />
                    </g>
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
                            good car at a fair price, but sellers seems to be hiding something.
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
