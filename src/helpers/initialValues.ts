import { Description, Tender } from "../types/types";

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
};

export const initValHeadingTender: Description = {
  item: "",
  description: "",
  unit: "",
  quantity: 0,
  unitValue: 0,
  totalValue: 0,
}
