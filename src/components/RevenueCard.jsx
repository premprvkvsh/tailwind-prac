import React from 'react';

export const RevenueCard = ({
  title,
  orderCount,
  amount
}) => {
  // Format the amount in Indian Rupees with the ₹ sign
  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);

  return (
    <div className="bg-white rounded shadow-md p-4">
      <div>
        {title}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="flex justify-between pt-2">
        <div className="font-semibold text-2xl">{formattedAmount}</div>
        {orderCount ? (
          <div className="flex cursor-pointer underline font-medium flex-col justify-center">
            <div className="text-blue-700">
              {orderCount} order(s)
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path className="fill-blue-700" strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        ) : null}
      </div>
    </div>
  );
};
