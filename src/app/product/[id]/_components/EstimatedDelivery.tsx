"use client";

import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

function EstimatedDelivery() {
  const getDeliveryDates = () => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 7); // Start date (1 week from now)
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 4); // End date (4 days after start date)

    // Format dates
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });
    };

    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  return (
    <div className="flex flex-wrap items-center text-sm sm:text-base">
      <TbTruckDelivery className="h-5 w-5 flex-shrink-0" />
      <span className="font-bold ml-1">Estimated Delivery:</span>
      <span className="font-jost ml-1">{getDeliveryDates()}</span>
    </div>
  );
}

export default EstimatedDelivery;
