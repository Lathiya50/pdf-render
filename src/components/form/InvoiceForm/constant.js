export const VENDOR_INFO_OPTIONS = [
  {
    value: "VEN001",
    label: "A-1 Exterminators",
  },
  {
    value: "VEN002",
    label: "A-2 Exterminators",
  },
];
export const PURCHASE_ORDER_OPTIONS = [
  { value: "PO1001", label: "PO-1001" },
  { value: "PO1002", label: "PO-1002" },
];
export const PAYMENT_TERMS_OPTIONS = [
  { value: "NET15", label: "Net 15" },
  { value: "NET30", label: "Net 30" },
  { value: "NET45", label: "Net 45" },
  { value: "NET60", label: "Net 60" },
];

export const INVOICE_NUMBER_OPTIONS = [
  { value: "INV789", label: "INV-789" },
  {
    value: "INV790",
    label: "INV-790",
  },
];
export const DEPARTMENT_OPTIONS = [
  { value: "IT", label: "IT" },
  { value: "HR", label: "HR" },
  { value: "Finance", label: "Finance" },
  { value: "Sales", label: "Sales" },
  { value: "Marketing", label: "Marketing" },
];

export const ACCOUNT_OPTIONS = [
  { value: "OPEX", label: "Operating Expenses" },
  { value: "OFFSUP", label: "Office Supplies" },
  { value: "TRAVEL", label: "Travel Expenses" },
  { value: "PROFSERV", label: "Professional Services" },
];

export const LOCATION_OPTIONS = [
  { value: "HQ", label: "Headquarters" },
  { value: "Branch1", label: "Branch Office 1" },
  { value: "Branch2", label: "Branch Office 2" },
];

export const INITIAL_VALUES = {
  vendor: "",
  poNumber: "",
  invoiceNumber: "",
  invoiceDate: "",
  totalAmount: "",
  paymentTerms: "",
  invoiceDueDate: "",
  glPostDate: "",
  invoiceDescription: "",
  expenseCodes: [
    {
      lineAmount: "",
      department: "",
      account: "",
      location: "",
      expenseDescription: "",
    },
  ],
  comment: "",
};

export const DUMMY_DATA = {
  vendor: "VEN001",
  poNumber: "PO1002",
  invoiceNumber: "INV789",
  invoiceDate: "2025-02-13",
  totalAmount: "1500.00",
  paymentTerms: "NET30",
  invoiceDueDate: "2025-03-15",
  glPostDate: "2025-02-13",
  invoiceDescription: "Office supplies and equipment for Q1 2025",
  expenseCodes: [
    {
      lineAmount: "1000.00",
      department: "IT",
      account: "OPEX",
      location: "HQ",
      expenseDescription: "Computer monitors and accessories",
    },
    {
      lineAmount: "500.00",
      department: "HR",
      account: "OPEX",
      location: "HQ",
      expenseDescription: "Office furniture",
    },
  ],
  comment: "Please process this invoice with high priority @JohnDoe",
};
