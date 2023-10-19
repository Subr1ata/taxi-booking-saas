import React, { useEffect, useState } from "react";
const initValue = {
  data: {
    suggestions: [],
  },
  suggestions: {},
};
export default function AutocompleteAddress() {
  const [source, setSource] = useState<string>("");
  const [sourceChange, setSourceChange] = useState<boolean>(false);
  const [destinationChange, setDestinationChange] = useState<boolean>(false);

  const [addressList, setAddressList] = useState(initValue);
  const [destination, setDestination] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getAddressList();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  const getAddressList = async () => {
    const res = await fetch("/api/search-address?q=" + source, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    setAddressList(result);
  };
  console.log(addressList);
  return (
    <div className="mt-5">
      <div className="relative">
        <label htmlFor="where" className="text-gray-400">
          Where From?
        </label>
        <input
          id="where"
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
            setSourceChange(true);
          }}
        />
        {(addressList?.suggestions && sourceChange && (
          <div className="shadow-md p-1 rounded absolute w-full bg-white">
            {addressList.data.suggestions.map(
              (item: { full_address: string }, index: number) => (
                <h2
                  key={index}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSource(item.full_address);
                    setAddressList(initValue);
                    setSourceChange(false);
                  }}
                >
                  {item.full_address}
                </h2>
              ),
            )}
          </div>
        )) ||
          null}
      </div>
      <div className="mt-3 relative">
        <label htmlFor="to" className="text-gray-400">
          Where To?
        </label>
        <input
          id="to"
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setDestinationChange(true);
          }}
        />
        {(addressList?.suggestions && destinationChange && (
          <div className="shadow-md p-1 rounded absolute w-full bg-white">
            {addressList.data.suggestions.map(
              (item: { full_address: string }, index: number) => (
                <h2
                  key={index}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setDestination(item.full_address);
                    setAddressList(initValue);
                    setDestinationChange(false);
                  }}
                >
                  {item.full_address}
                </h2>
              ),
            )}
          </div>
        )) ||
          null}
      </div>
    </div>
  );
}
