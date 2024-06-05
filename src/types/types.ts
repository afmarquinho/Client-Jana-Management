export type workforce = {
  workforce: string;
  workshift: number;
};
export type material = {
  material: string;
  amount: number;
  unit: string;
};

export type VisitReport = {
  visitDate: Date;
  dueDate: Date;
  name: string;
  customerName: string;
  nit:number;
  ref: string;
  city: string;
  address: string;
  contactName: string,
  phoneNumber: string;
  email: string;
  priority: string;
  description: string;
  // priority: string; this is another option
  workforce: workforce[];
  material: material[];
};
