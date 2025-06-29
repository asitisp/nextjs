"use client";

import React, { useEffect, useState } from "react";

type TimeOffer = {
  _id: string;
  fromdate: string;
  todate: string;
  offer: number;
  percentage: number;
};

export default function TimeOffersPage() {
  const [offer, setOffer] = useState<TimeOffer | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
  const fetchOffer = async () => {
    const res = await fetch('/api/timeoffer/retriveoffer');
    const data = await res.json();
   
    setOffer(data.offer);
  };

  fetchOffer();
  setError("");
}, []);

  return (
    <div className="p-4 border rounded shadow-md bg-white max-w-lg mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Active Time Offer</h2>
      {error && <p className="text-red-500">{error}</p>}
      {!error && offer ? (
        <div>
          <p><strong>Offer:</strong> {offer.offer}</p>
          <p><strong>Percentage:</strong> {offer.percentage}%</p>
          <p><strong>From:</strong> {new Date(offer.fromdate).toLocaleString()}</p>
          <p><strong>To:</strong> {new Date(offer.todate).toLocaleString()}</p>
        </div>
      ) : (
        !error && <p>No active offer currently.</p>
      )}
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('/api/timeoffer/retriveoffer');
  const data = await res.json();
  return { props: { offer: data.offer } };
};