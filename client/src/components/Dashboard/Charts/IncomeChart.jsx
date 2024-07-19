// components/Dashboard/IncomeSource.js
import React from 'react';

const IncomeSource = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Income Source</h3>
            <p>Summary of income sources</p>
            <ul className="mt-4 space-y-2">
                <li className="flex justify-between"><span>E-commerce</span><span>$2,100</span></li>
                <li className="flex justify-between"><span>Google Adsense</span><span>$950</span></li>
                <li className="flex justify-between"><span>My Shop</span><span>$8,000</span></li>
                <li className="flex justify-between"><span>Salary</span><span>$13,000</span></li>
            </ul>
        </div>
    );
};

export default IncomeSource;
