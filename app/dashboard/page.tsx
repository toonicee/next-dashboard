import React from 'react';

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard Cards */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p>Welcome to your dashboard!</p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Statistics</h2>
          <ul>
            <li>Total Users: 100</li>
            <li>Active Projects: 25</li>
          </ul>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul>
            <li>Project A updated</li>
            <li>New user joined</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
