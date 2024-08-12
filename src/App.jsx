import React from 'react';
import { RevenueCard } from './components/RevenueCard'; // Adjust the path according to your folder structure

function App() {
  return (
    <div className='grid grid-cols-4'>
     
      <RevenueCard 
        title="Amount pending" 
        orderCount={23} 
        amount={2312.23} 
      />
      {/* <RevenueCard 
        title="Pending Orders" 
        orderCount={13} 
        amount={92312.20} 
      /> */}
    </div>
  );
}

export default App;
