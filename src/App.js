import React from "react";
import { InvoiceData } from "./pages/Invoice/invoiceData";
import { Invoice } from "./pages";

const App = () => {
  return (
    <div>
      <Invoice {...InvoiceData} />
    </div>
  );
};

export default App;
