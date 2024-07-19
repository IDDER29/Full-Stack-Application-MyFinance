import React from 'react';

const HorizontalCard = () => {
    return (
        <div className='bg-gray-400 w-4/5 mx-auto rounded-3xl'>
            <h1 className='text-center font-black text-4xl py-10 '>Live a Rich future today</h1>
            <div className="flex min-h-96 items-center justify-center">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            teamwork
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            The Power of a Good Working Team
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            A good working team is the backbone of any successful organization. It is characterized by clear communication, mutual respect, and a shared goal. When team members collaborate effectively, they can overcome challenges, innovate solutions, and achieve outstanding results. Together, they create a positive work environment where everyone's contributions are valued, leading to both personal and professional growth.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex min-h-96 items-center justify-center">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            teamwork
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            The Power of a Good Working Team
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            A good working team is the backbone of any successful organization. It is characterized by clear communication, mutual respect, and a shared goal. When team members collaborate effectively, they can overcome challenges, innovate solutions, and achieve outstanding results. Together, they create a positive work environment where everyone's contributions are valued, leading to both personal and professional growth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HorizontalCard;
