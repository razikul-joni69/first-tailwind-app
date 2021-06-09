import React from "react";

const PriceingSection = () => {
    return (
        <div className="mt-16">
            <div class="w-full bg-blue pt-8">
                <div class="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
                    <div class="bg-gray-50 sm:flex-1 lg:flex-initial lg:w-1/4 rounded-lg rounded-tr-none bg-white mt-4 flex flex-col">
                        <div class="p-8 text-3xl font-bold text-center">
                            Free
                        </div>
                        <div class="border-0 border-grey-light border-t border-solid text-sm">
                            <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                                1 Ice Cream
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                                Unlimited toppings
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                                Analytics
                            </div>
                        </div>
                        <div class="text-center mt-8 mb-8 mt-auto">
                            <a
                                href="#s"
                                class="inline-block px-6 py-4 rounded "
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                    <div class="bg-gray-800 text-white flex-1 lg:flex-initial lg:w-1/4 rounded-lg  mt-4 sm:-mt-4 shadow-lg z-30 flex flex-col">
                        <div class="w-full p-8 text-3xl font-bold text-center">
                            Basic
                        </div>
                        <div class="w-full border-0 border-grey-light border-t border-solid text-sm">
                            <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                                2 Ice Creams
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                                25 Cones
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                                Unlimited toppings
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                                Analytics
                            </div>
                        </div>
                        <div class="w-full text-center px-8 pt-8 text-xl mt-auto">
                            $2.99
                            <span class="text-grey-light italic line-through">
                                $4.99
                            </span>
                        </div>
                        <div class="w-full text-center mb-8 mt-auto">
                            <a
                                href="#s"
                                class="inline-block bg-green text-white px-6 py-4 rounded hover:bg-green-darker hover:text-white hover:no-underline"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                    <div class="bg-gray-50 flex-1 lg:flex-initial lg:w-1/4 rounded-lg rounded-tl-none bg-white mt-4 flex flex-col">
                        <div class="p-8 text-3xl font-bold text-center">
                            Pro
                        </div>
                        <div class="border-0 border-grey-light border-t border-solid text-sm">
                            <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                                Unlimited Ice Creams
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                                Unlimited Cones
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                                Unlimited toppings
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                                Analytics
                            </div>
                        </div>
                        <div class="text-center px-8 pt-8 text-xl mt-auto">
                            $5.99
                            <span class="text-grey-light italic line-through">
                                $9.99
                            </span>
                        </div>
                        <div class="text-center pt-8 mb-8 mt-auto">
                            <a
                                href="#s"
                                class="inline-block px-6 py-4 rounded"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 mt-10">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-indigo-600">
                            Start your free trial today.
                        </span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="#s"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Get started
                            </a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a
                                href="#s"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceingSection;
