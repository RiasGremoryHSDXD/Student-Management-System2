import React, { useState, useEffect } from 'react';
import { Customer } from '../types';

interface CustomersProps {
  customers: Customer[];
}

export default function Home({ customers }: CustomersProps) {
    console.log(customers[0]['name'])
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Customer Names Home Pages</h1>
      
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {customers.map((customer, index) => (
            <li key={index} className="px-6 py-4 hover:bg-gray-50">
              <p className="text-lg font-medium text-gray-900">{customer.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}