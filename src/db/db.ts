export type workForce = {
  workForce: string;
  workShift: number;
};
export type material = {
  material: string;
  amount: number;
  unit: string;
};
type data ={
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
  workforce: workForce[];
  materials: material[];
  description: string;
}

export const dataReport: data[] = [
  {
    visitDate: "2024-05-01",
    name: "Project Alpha",
    customerName: "John Doe",
    nit: 1234567890,
    id: "1",
    city: "New York",
    address: "123 Main St",
    phoneNumber: "123-456-7890",
    email: "johndoe@example.com",
    dueDate: "2024-06-01",
    priority: "high",
    workforce: [
      { workForce: "Electrician", workShift: 8 },
      { workForce: "Plumber", workShift: 6 }
    ],
    materials: [
      { material: "Cable", amount: 100, unit: "meters" },
      { material: "Pipe", amount: 50, unit: "meters" }
    ],
    description: "Installation of electrical and plumbing systems."
  },
  {
    visitDate: "2024-05-02",
    name: "Project Beta",
    customerName: "Jane Smith",
    nit: 9876543210,
    id: "2",
    city: "Los Angeles",
    address: "456 Elm St",
    phoneNumber: "987-654-3210",
    email: "janesmith@example.com",
    dueDate: "2024-06-15",
    priority: "middle",
    workforce: [
      { workForce: "Carpenter", workShift: 8 },
      { workForce: "Painter", workShift: 7 }
    ],
    materials: [
      { material: "Wood", amount: 200, unit: "boards" },
      { material: "Paint", amount: 30, unit: "liters" }
    ],
    description: "Renovation of the living room."
  },
  {
    visitDate: "2024-05-03",
    name: "Project Gamma",
    customerName: "Alice Johnson",
    nit: 1122334455,
    id: "3",
    city: "Chicago",
    address: "789 Oak St",
    phoneNumber: "321-654-0987",
    email: "alicejohnson@example.com",
    dueDate: "2024-06-10",
    priority: "low",
    workforce: [
      { workForce: "Mason", workShift: 5 },
      { workForce: "Roofer", workShift: 8 }
    ],
    materials: [
      { material: "Bricks", amount: 1000, unit: "units" },
      { material: "Tiles", amount: 200, unit: "pieces" }
    ],
    description: "Construction of a small shed."
  },
  {
    visitDate: "2024-05-04",
    name: "Project Delta",
    customerName: "Bob Brown",
    nit: 2233445566,
    id:" 4",
    city: "Houston",
    address: "123 Pine St",
    phoneNumber: "456-789-0123",
    email: "bobbrown@example.com",
    dueDate: "2024-07-01",
    priority: "middle",
    workforce: [
      { workForce: "Electrician", workShift: 7 },
      { workForce: "Plumber", workShift: 7 }
    ],
    materials: [
      { material: "Wires", amount: 150, unit: "meters" },
      { material: "PVC Pipes", amount: 70, unit: "meters" }
    ],
    description: "Rewiring and plumbing maintenance."
  },
  {
    visitDate: "2024-05-05",
    name: "Project Epsilon",
    customerName: "Charlie Green",
    nit: 3344556677,
    id: "5",
    city: "Phoenix",
    address: "456 Birch St",
    phoneNumber: "567-890-1234",
    email: "charliegreen@example.com",
    dueDate: "2024-06-20",
    priority: "high",
    workforce: [
      { workForce: "Painter", workShift: 6 },
      { workForce: "Carpenter", workShift: 8 }
    ],
    materials: [
      { material: "Paint", amount: 40, unit: "liters" },
      { material: "Nails", amount: 500, unit: "pieces" }
    ],
    description: "Exterior and interior painting."
  },
  {
    visitDate: "2024-05-06",
    name: "Project Zeta",
    customerName: "Diana White",
    nit: 4455667788,
    id: "6",
    city: "Philadelphia",
    address: "789 Cedar St",
    phoneNumber: "678-901-2345",
    email: "dianawhite@example.com",
    dueDate: "2024-06-25",
    priority: "low",
    workforce: [
      { workForce: "Roofer", workShift: 8 },
      { workForce: "Mason", workShift: 5 }
    ],
    materials: [
      { material: "Cement", amount: 30, unit: "bags" },
      { material: "Tiles", amount: 150, unit: "pieces" }
    ],
    description: "Roof repairs and masonry work."
  },
  {
    visitDate: "2024-05-07",
    name: "Project Eta",
    customerName: "Eve Black",
    nit: 5566778899,
    id: "7",
    city: "San Antonio",
    address: "123 Walnut St",
    phoneNumber: "789-012-3456",
    email: "eveblack@example.com",
    dueDate: "2024-07-05",
    priority: "middle",
    workforce: [
      { workForce: "Electrician", workShift: 6 },
      { workForce: "Painter", workShift: 8 }
    ],
    materials: [
      { material: "Cables", amount: 120, unit: "meters" },
      { material: "Paint", amount: 25, unit: "liters" }
    ],
    description: "Electrical installations and painting."
  },
  {
    visitDate: "2024-05-08",
    name: "Project Theta",
    customerName: "Frank Brown",
    nit: 6677889900,
    id: "8",
    city: "San Diego",
    address: "456 Maple St",
    phoneNumber: "890-123-4567",
    email: "frankbrown@example.com",
    dueDate: "2024-07-10",
    priority: "high",
    workforce: [
      { workForce: "Carpenter", workShift: 8 },
      { workForce: "Plumber", workShift: 6 }
    ],
    materials: [
      { material: "Wood", amount: 250, unit: "boards" },
      { material: "Pipes", amount: 60, unit: "meters" }
    ],
    description: "Construction of wooden structures and plumbing."
  },
  {
    visitDate: "2024-05-09",
    name: "Project Iota",
    customerName: "Grace Kelly",
    nit: 7788990011,
    id: "9",
    city: "Dallas",
    address: "789 Spruce St",
    phoneNumber: "901-234-5678",
    email: "gracekelly@example.com",
    dueDate: "2024-07-15",
    priority: "middle",
    workforce: [
      { workForce: "Painter", workShift: 7 },
      { workForce: "Electrician", workShift: 8 }
    ],
    materials: [
      { material: "Paint", amount: 35, unit: "liters" },
      { material: "Wires", amount: 100, unit: "meters" }
    ],
    description: "Painting and electrical work."
  },
  {
    visitDate: "2024-05-10",
    name: "Project Kappa",
    customerName: "Hank Williams",
    nit: 8899001122,
    id: "10",
    city: "San Francisco",
    address: "123 Aspen St",
    phoneNumber: "234-567-8901",
    email: "hankwilliams@example.com",
    dueDate: "2024-07-20",
    priority: "low",
    workforce: [
      { workForce: "Roofer", workShift: 5 },
      { workForce: "Mason", workShift: 7 }
    ],
    materials: [
      { material: "Bricks", amount: 800, unit: "units" },
      { material: "Tiles", amount: 100, unit: "pieces" }
    ],
    description: "Roofing and masonry for a new building."
  }
];
