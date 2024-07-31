import {
  Description,
  LaborType,
  OfferSummaryType,
  OtherExpensesType,
  SupplyType,
  Tender,
  UserType,
} from "../types/types";

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
  materials: [],
  otherExpenses: [],
  summary: {
    materials: 0,
    preparation: 0,
    day: 0,
    night: 0,
    total: 0,
  },
  comments: [],
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
  shiftType: "",
  rate: 0,
  shiftCount: 0,
  partialCost: 0,
  profit: 0,
  profitAmount: 0,
  totalValue: 0,
};

export const initValMaterial: SupplyType = {
  description: "",
  unit: "",
  quantity: 0,
  unitCost: 0,
  partialCost: 0,
  profit: 0,
  profitAmount: 0,
  totalValue: 0,
};
export const initValOtherExpenses: OtherExpensesType = {
  description: "",
  shiftType: "",
  unit: "",
  amount: 0,
  unitCost: 0,
  partialCost: 0,
  profit: 0,
  profitAmount: 0,
  totalValue: 0,
};
export const initOfferSummary: OfferSummaryType = {
  materials: 0,
  preparation: 0,
  day: 0,
  night: 0,
  total: 0,
};


export const initValuser: UserType = {
  id: 0,
  name: "",
  lastName: "",
  idType: "",
  userId: "",
  dateOfBirth: "",
  address: "",
  phoneNumber: "",
  email: "",
  role: "",
  jobTitle: "",
  user: "",
  password: "",
  updatedAt: "",
  createdAt: "",
  profilePicture: null,
};
