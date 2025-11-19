export default function WaitList() {
    return (
        <section className="py-20 max-w-screen-xl mx-auto">
            <div className="relative overflow-hidden mx-4 px-6 py-24 rounded-3xl bg-primary md:px-12 md:mx-8 lg:py-32">
                <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight">
                            Ready to buy smarter?
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                            Join early users getting free credits to check vehicles before anyone
                            else. Be the first to know the truth about any car.
                        </p>
                    </div>

                    <div className="space-y-6 mt-10">
                        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:max-w-lg sm:mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-6 py-4 rounded-lg outline-none text-gray-800 placeholder-gray-500 font-medium bg-white"
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-lg text-blue-600 bg-white hover:bg-blue-50 active:bg-gray-100 duration-150 outline-none shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                            >
                                Get Early Access
                            </button>
                        </form>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-blue-100 text-sm sm:text-base">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 text-blue-300"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="font-semibold">Early users get free credits</span>
                        </div>
                    </div>

                    <p className="text-sm text-blue-200 pt-4">
                        No spam. We value your privacy.
                        <br />
                        We will let you know as soon as we launch the platform.
                    </p>
                </div>
            </div>
        </section>
    );
}
