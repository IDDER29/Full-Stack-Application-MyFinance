import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';  // Ensure Tailwind CSS is imported
import '@fortawesome/fontawesome-free/css/all.min.css';  // Ensure Font Awesome is imported if not already included in the project
import ModalForm from '../components/Layout/ModalForm';
import Footer from '../components/Layout/Footer';
import LogedNav from '../components/Layout/LogedNav';
// import { useState } from 'react';



const ProfileSection = () => {

    const user = {
        name: "jon doe",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        income: 34567,
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod."
    };

    const items = [
        {
            name: "item name",
            budget: 56,
            dateCreated: Date.now(),
            dateUpdated: Date.now(),
            amountAchieved: 78,
        },
        {
            name: "item name",
            budget: 56,
            dateCreated: Date.now(),
            dateUpdated: Date.now(),
            amountAchieved: 78,
        },
        {
            name: "item name",
            budget: 56,
            dateCreated: Date.now(),
            dateUpdated: Date.now(),
            amountAchieved: 78,
        }
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <LogedNav/>
        <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <img src="https://randomuser.me/api/portraits/men/94.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" alt="User Portrait" />
                                <h1 className="text-xl font-bold">{user.name}</h1>
                                <p className="text-gray-700">Income: {user.income}</p>
                                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleOpenModal}>Edit</button>
                                    {isModalOpen && <ModalForm onClose={handleCloseModal} />}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Bio</h2>
                            <p className="text-gray-700">{user.bio}</p>

                            <h3 className="font-semibold text-center mt-3 -mb-2">
                                Find me on
                            </h3>

                            <h2 className="text-xl font-bold mt-6 mb-4">Items</h2>
                            {items.map((item, i) => {
                                return (
                                    <div key={i} className="mb-6">
                                        <div className="flex justify-between flex-wrap gap-2 w-full">
                                            <span className="text-gray-700 font-bold">{item.name}</span>
                                            <p>
                                                <span className="text-gray-700">{new Date(item.dateCreated).toLocaleString()}</span> |
                                                <span className="text-gray-700"> {new Date(item.dateUpdated).toLocaleString()}</span>
                                            </p>
                                        </div>
                                        <p className="mt-2">
                                            the item budget {item.budget} <br />
                                            the amountAchieved {item.amountAchieved}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default ProfileSection;
