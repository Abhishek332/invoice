export const InvoiceData = {
  invoiceHeader: {
    "invoice no.": 13132,
    "due date": "12 Jan 2020",
    "invoice date": "15 Jan 2020",
  },
  paymentMethod: {
    "account no.": 5545454556,
    "account name": "XYZ Pvt. Ltd.",
    "branch name": "Indore",
  },
  invoiceTo: {
    name: "Abhishek Porwal",
    company: "Kredily Pvt. Ltd.",
    details: {
      phone: 7987441515,
      email: "abhishek@xyz.com",
      address: "Dayanand Colony, Nagda Jn.",
    },
  },
  invoiceRows: [
    {
      material: "plastic",
      labor: 2,
      "rate/hr": 100,
      hours: 4,
      amount: 800,
    },
    {
      material: "paper",
      labor: 1,
      "rate/hr": 200,
      hours: 3,
      amount: 600,
    },
    {
      material: "other",
      labor: 4,
      "rate/hr": 150,
      hours: 3,
      amount: 1050,
    },
    {
      material: "tiles",
      labor: 2,
      "rate/hr": 500,
      hours: 1,
      amount: 1000,
    },
  ],
};
