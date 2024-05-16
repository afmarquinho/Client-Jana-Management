// Define a generic object, as workforce y material have a no difine number of elements
export type GenericObject = { [key: string]: number };

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
