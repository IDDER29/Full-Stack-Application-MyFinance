import React from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure Font Awesome is imported if not already included in the project

const user = {
  name: "John Doe",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lacinia liberoat dignissim. Praesent euismod, libero eu tincidunt aliquam",
  income: 0,
  address: "123 Main St, Anytown, CA,12345",
  phone: "(555) 555-5555",
  preferences: {
    currency: "us",
    language: "en",
  },
};
const alltransactions = [
  {
    name: "jon",
    budget: 0,
    dateCreated: 12345678,
    dateUpdated: 123456789,
    amountAchieved: 0,
  },
];
const ProfileSection = () => (
  <>
    <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
      <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className="px-5 py-2 flex flex-col gap-3 pb-6">
        <div className="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white">
          <img src="" alt="" />
        </div>
        <div>
          <h3 className="text-xl text-slate-900 relative font-bold leading-6">
            {user.name}
          </h3>
          <p className="text-sm text-gray-600">{user.income}</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <span className="rounded-sm bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
            {user.address}
          </span>
          <span className="rounded-sm bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
            {user.phone}
          </span>
          <span className="rounded-sm bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            {user.preferences.currency}
          </span>
          <span className="rounded-sm bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
            {user.preferences.language}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            modefi profile
          </button>
        </div>
        <h4 className="text-md font-medium leading-3">Bio</h4>
        <p className="text-sm text-stone-500">{user.bio}</p>
        <h4 className="text-md font-medium leading-3">items</h4>
        <div className="flex flex-col gap-3">
          {alltransactions.map((e, i) => {
            return (
              <div className="flex items-center justify-between">
                <div
                  key={i}
                  className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-9/12 "
                >
                  <div className="leading-3">
                    <p className="text-sm font-bold text-slate-700">{e.name}</p>
                    <span className="text-xs text-slate-600">
                      {" "}
                      <b>Date of creation</b> {e.dateCreated}
                    </span>{" "}
                    <br />
                    <span className="text-xs text-slate-600">
                      {" "}
                      <b>Date of update</b> {e.dateUpdated}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500  ml-auto self-center">
                    <b>amountAchieved</b> {e.amountAchieved}
                  </p>
                </div>
                <button
                  type="button"
                  class="focus:outline-none text-white w-16 px-1 py-2 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  delete
                </button>
                <button
                  type="button"
                  class="focus:outline-none text-white w-16 px-1 py-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
                >
                  modefi
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </>
);

export default ProfileSection;
