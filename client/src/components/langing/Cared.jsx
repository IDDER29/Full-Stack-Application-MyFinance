import React from 'react'

const Cared = () => {
    const cardes = [{
        title: "Budgeting",
        description: "Set unlimited daily, weekly, monthly, or one-time budgets"
    },
    {
        title: "Expense control",
        description: "See every transaction, synced and categorized automatically."
    },
    {
        title: "Planning",
        description: "Get ahead of the curve. Automated upcoming payment notifications."
    }
    ]
    return (
        <div className='flex  justify-around'>
            {cardes.map((item, index) => {
                return (
                    <a key={index} href="#" className="block w-1/4 p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {item.title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {item.description}
                        </p>
                    </a>
                )
            })}
        </div>
    )
}

export default Cared
