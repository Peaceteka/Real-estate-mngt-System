import { Suspense } from 'react';
import ClientList from '@/components/clients/ClientList';
import ClientsHeader from '@/components/clients/ClientsHeader';

export default function ClientsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ClientsHeader />
      <Suspense fallback={<div>Loading clients...</div>}>
        <ClientList />
      </Suspense>
    </div>
  );
}
