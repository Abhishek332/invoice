import React from "react";
import { InvoiceData } from "./pages/Invoice/invoiceData";
import { Invoice } from "./pages";
import JsPDF from "jspdf";

const App = () => {
  const generatePDF = () => {
    const InvoiceContainer = document.getElementById("invoice-container");
    InvoiceContainer.style.margin = "0";
    InvoiceContainer.style.transform = "scale(0.57) translate(-40%, -40%)";
    const invoice = new JsPDF("portrait", "pt", "a4");
    invoice.html(document.querySelector("#invoice")).then(() => {
      invoice.save("invoice.pdf");
    });
  };

  return (
    <>
      <button onClick={generatePDF}>Download Invoice</button>
      <div id="invoice">
        <Invoice {...InvoiceData} />
      </div>
    </>
  );
};

export default App;
