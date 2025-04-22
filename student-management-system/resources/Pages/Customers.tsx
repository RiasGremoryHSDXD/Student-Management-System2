import React from 'react';
import { Head } from '@inertiajs/react';


// export default function Customers({ customers }: { customers: { name: string }[] }) {
//   return (
//     <div className="max-w-6xl mx-auto py-10 px-4">
//       {/* <h1 className="text-3xl font-bold mb-6">Customer Names</h1>
      
//       <div className="bg-white shadow rounded-lg overflow-hidden">
//         <ul className="divide-y divide-gray-200">
//           {customers.map((customer, index) => (
//             <li key={index} className="px-6 py-4 hover:bg-gray-50">
//               <p className="text-lg font-medium text-gray-900">{customer.name}</p>
//             </li>
//           ))}
//         </ul>
//       </div> */}
    
//       <ul className="divide-y divide-gray-200">
//           {customers.map((customer, index) => (
//             <li key={index} className="px-6 py-4 hover:bg-gray-50">
//               <p className="text-lg font-medium text-gray-900">{customer.name}</p>
//             </li>
//           ))}
//         </ul>
      
//     </div>
//   );
// }
export default function Customers({ customers }: { customers: { name: string }[] }) {
    return (
      <div>
        <h1>Customer Names</h1>
        <ul>
          {customers.map((c, i) => (
            <li key={i}>{c.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  