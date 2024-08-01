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
  shiftType: string;
  rate: number;
  shiftCount: number;
  partialCost: number;
  profit: number;
  profitAmount: number;
  totalValue: number;
};
export type SupplyType = {
  description: string;
  unit: string;
  quantity: number;
  unitCost: number;
  partialCost: number;
  profit: number;
  profitAmount: number;
  totalValue: number;
};

export type OtherExpensesType = {
  description: string;
  shiftType: string;
  unit: string;
  amount: number;
  unitCost: number;
  partialCost: number;
  profit: number;
  profitAmount: number;
  totalValue: number;
};

export type OfferSummaryType = {
  materials: number;
  preparation: number;
  day: number;
  night: number;
  total: number;
};

export type CommentsTypes = {
  author: string;
  comment: string;
};

export type Tender = HeadingTender & {
  tender: string;
  description: Description[];
  notes: string[];
  status: string;
  reportId: number;
  ref: string;
  workforce: LaborType[];
  materials: SupplyType[];
  otherExpenses: OtherExpensesType[];
  summary: OfferSummaryType;
  comments: CommentsTypes[];
};

export type UserFormType = {
  name: string;
  lastName: string;
  idType: string;
  userId: number;
  dateOfBirth: string;
  address: string;
  phoneNumber: string;
  email: string;
  role: string;
  jobTitle: string;
  user: string;
  password: string;
};

export type UserType = UserFormType & {
  id: number;
  profilePicture: string | null;
  active:boolean
};

export type UserUpdatedType ={
  address: string;
  phoneNumber: string;
  email: string;
  jobTitle: string;
  role: string;
  user: string;
}