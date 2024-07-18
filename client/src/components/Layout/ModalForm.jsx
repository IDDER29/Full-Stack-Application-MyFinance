import React from 'react';
import 'tailwindcss/tailwind.css';  // Ensure Tailwind CSS is imported
import { useForm } from 'react-hook-form';

const ModalForm = ({ onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        // You can handle form submission here
        onClose(); // Close the modal after submission
    };

    return (
        <>
        <div className="max-w-2xl mx-auto">
            <div
                id="authentication-modal"
                className="fixed inset-0 z-50 flex justify-center items-center overflow-x-hidden overflow-y-auto h-modal md:h-full top-4 left-0 right-0"
            >
                <div className="relative w-full max-w-md px-4 h-full md:h-auto">
                    <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
                        <div className="flex justify-end p-2">
                            <button
                                onClick={onClose}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Modify your account
                            </h3>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className={`bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                                    placeholder="John Doe"
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label
                                    htmlFor="income"
                                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                                >
                                    Income
                                </label>
                                <input
                                    type="text"
                                    name="income"
                                    id="income"
                                    className={`bg-gray-50 border ${errors.income ? 'border-red-500' : 'border-gray-300'} text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                                    placeholder="7786"
                                    {...register('income', { required: 'Income is required', pattern: { value: /^[0-9]+$/, message: 'Income must be a number' } })}
                                />
                                {errors.income && <p className="text-red-500 text-sm mt-1">{errors.income.message}</p>}
                            </div>
                            <div>
                                <label
                                    htmlFor="bio"
                                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                                >
                                    Bio
                                </label>
                                <textarea
                                    name="bio"
                                    id="bio"
                                    className={`bg-gray-50 border ${errors.bio ? 'border-red-500' : 'border-gray-300'} text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                                    {...register('bio', { required: 'Bio is required', maxLength: { value: 300, message: 'Bio cannot exceed 300 characters' } })}
                                ></textarea>
                                {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Update the profile
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ModalForm;
