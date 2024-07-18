import React from 'react';


export const Statistic = () => {
    const statistics = [
        { value: '144K', label: 'Active user' },
        { value: '8.9', label: 'Rating' },
        { value: '12K', label: 'Weekly use' },
        { value: '18M', label: 'Transection' },
    ];
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                {statistics.map((stat, index) => (
                    <div key={index} className={`text-center ${index < statistics.length - 1 ? 'md:border-r' : ''}`}>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{stat.value}</h6>
                        <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
