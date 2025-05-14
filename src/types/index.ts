export type User = {
  id: string;
  email: string;
  name: string | null;
  role: 'ADMIN' | 'USER';
};

export type Property = {
  id: string;
  title: string;
  type: string;
  status: string;
  units: Unit[];
  client: {
    firstName: string;
    lastName: string;
  };
};

export type Unit = {
  id: string;
  number: string;
  property: Property;
  rentAmount: number;
  status: 'VACANT' | 'OCCUPIED' | 'MAINTENANCE';
};

export type Tenant = {
  id: string;
  user: User;
  unit: Unit;
  startDate: string;
  endDate: string | null;
  payments: Payment[];
};

export type Payment = {
  id: string;
  tenant: Tenant;
  amount: number;
  type: 'RENT' | 'DEPOSIT' | 'MAINTENANCE';
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  receiptUrl: string | null;
  paidAt: string;
};
