export type workforce = {
  workforce: string;
  workshift: number;
};
export type material = {
  material: string;
  quantity: number;
  unit: string;
};

export type VisitReport = {
  visitDate: string;
  dueDate: string;
  name: string;
  customerName: string;
  ref: string;
  customerCity: string;
  contactName: string;
  phoneNumber: string;
  email: string;
  priority: string;
  description: string;
  // priority: string; this is another option
  workforce: workforce[];
  material: material[];
  close: boolean;
  createdBy: string;
};

//* el report Id es para al crear la cotizacion usar el mismo nombre del atributo directamente
export type VisitReportApi = VisitReport & {
  id: number;
  processed: boolean;
  tenderID: number;
};

export type Description = {
  item: string;
  description: string;
  unit: string;
  quantity: number;
  unitValue: number;
  totalValue: number;
};
export type Note = string;

//* SE COLOCA "?" PARA PODER USAR EL TYPE EN VARIABLES QUE NO VIENEN CON TODAS LAS PROPIEDADES
export type Tender = {
  id: number;
  tender: string;
  name: string;
  customerName: string;
  contactName: string;
  email: string;
  phoneNumber: string;
  customerCity: string;
  createdBy: string;
  reviewedBy: string;
  date: string;
  leadTime: string;
  paymentMethod: string;
  proposalValidity: string;
  description: Description[];
  notes: Note[];
  status: string;
  reportId: number;
  ref: string;
};

