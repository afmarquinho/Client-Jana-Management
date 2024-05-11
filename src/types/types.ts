// Define a generic object, as workforce y material have a no difine number of elements
export type GenericObject = { [key: string]: number };

export type VisitReport = {
  date: string;
  name: string;
  customerName: string;
  id: number;
  city: string;
  address: string;
  phoneNumber: string;
  email: string;
  dueDate: string;
  priority: "Alta" | "Media" | "Baja";
  // priority: string; this is another option
  workforce: GenericObject;
  materials: GenericObject;
  description: string;
};
