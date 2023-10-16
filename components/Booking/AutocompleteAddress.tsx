import React from "react";

export default function AutocompleteAddress() {
  return (
    <div className="mt-5">
      <div>
        <label htmlFor="where" className="text-gray-400">
          Where From?
        </label>
        <input
          id="where"
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
        />
      </div>
      <div className="mt-3">
        <label htmlFor="to" className="text-gray-400">
          Where To?
        </label>
        <input
          id="to"
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
        />
      </div>
    </div>
  );
}
