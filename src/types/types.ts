export type WorkforceType = {
  role: string;
  workshift: number;
};
export type MaterialType = {
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
  workforce: WorkforceType[];
  material: MaterialType[];
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

export type HeadingTender = {
  id: number;
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
};

export type LaborType = {
  role: string;
  workers: number;
  rate: number;
  workshift: number;
  profit: number;
  profitAmount: number;
};
export type SupplyType = {
  material: string;
  unit: string;
  quantity: number;
  unitCost: number;
  totalCost: number;
  profit: number;
  profitAmount: number;
};

export type Tender = HeadingTender & {
  tender: string;
  description: Description[];
  notes: Note[];
  status: string;
  reportId: number;
  ref: string;
  workforce: LaborType[];
  material: SupplyType[];
};
