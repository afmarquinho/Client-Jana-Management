import { Description, LaborType, SupplyType, Tender } from "../types/types";

export const initValTender: Tender = {
  id: 0,
  tender: "",
  name: "",
  customerName: "",
  contactName: "",
  email: "",
  phoneNumber: "",
  customerCity: "",
  createdBy: "",
  reviewedBy: "",
  date: "",
  leadTime: "",
  paymentMethod: "",
  proposalValidity: "",
  description: [],
  notes: [],
  status: "",
  reportId: 0,
  ref: "",
  workforce: [],
  material: [],
};

export const initValDescription: Description = {
  item: "",
  description: "",
  unit: "",
  quantity: 0,
  unitValue: 0,
  totalValue: 0,
};
export const initValWorkforce: LaborType = {
  role: "",
  workers: 0,
  rate: 0,
  workshift: 0,
  profit: 0,
  profitAmount: 0,
};
export const initValMaterial: SupplyType = {
  material: "",
  unit: "",
  quantity: 0,
  unitCost: 0,
  totalCost: 0,
  profit: 0,
  profitAmount: 0,
};
