"use client";
import React, { useEffect, useState } from "react";
import AutocompleteAddress from "./AutocompleteAddress";
import Cars from "./Cars";

export default function Booking() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight * 0.72);
  useEffect(() => {
    // Check if window is defined (to handle server-side rendering)
    if (typeof window !== "undefined") {
      setScreenHeight(window.innerHeight * 0.72);

      const updateScreenHeight = () => {
        setScreenHeight(window.innerHeight * 0.72);
      };

      // Add an event listener to update the height when the window is resized.
      window.addEventListener("resize", updateScreenHeight);

      // Clean up the event listener when the component unmounts.
      return () => {
        window.removeEventListener("resize", updateScreenHeight);
      };
    }
  }, []);
  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div
        className="border-[1px] p-5 rounded-md"
        style={{ height: screenHeight }}
      >
        <AutocompleteAddress />
        <Cars />
      </div>
    </div>
  );
}
