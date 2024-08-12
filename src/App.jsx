import React from 'react';
import { RevenueCard } from './components/RevenueCard'; // Adjust the path according to your folder structure

function App() {
  return (
    <div className="App">
      <h1>Revenue Dashboard</h1>
      <RevenueCard 
        title="Total Revenue" 
        orderCount={23} 
        amount={2312.23} 
      />
      <RevenueCard 
        title="Pending Orders" 
        orderCount={13} 
        amount={92312.20} 
      />
    </div>
  );
}

export default App;
