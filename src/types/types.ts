export type workForce = {
  workForce: string;
  workShift: number;
};
export type material = {
  material: string;
  amount: number;
  unit: string;
};

export type VisitReport = {
  visitDate: string;
  name: string;
  customerName: string;
  nit:number;
  id: string;
  city: string;
  address: string;
  phoneNumber: string;
  email: string;
  dueDate: string;
  priority: string;
  // priority: string; this is another option
  workforce: workForce[];
  materials: material[];
  description: string;
};
