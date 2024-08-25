import { LaborType, OtherExpensesType, SupplyType } from "../types/types";

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
