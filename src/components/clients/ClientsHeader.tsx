'use client';

import Link from 'next/link';

export default function ClientsHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
      <Link
        href="/clients/new"
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Add New Client
      </Link>
    </div>
  );
}
