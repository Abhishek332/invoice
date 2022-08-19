import { SectionPoint, Table } from "../../components";
import "./Invoice.scss";

const Invoice = ({ invoiceHeader, paymentMethod, invoiceTo, invoiceRows }) => {
  const getTotal = () => {
    let total = 0;
    invoiceRows.forEach((row) => {
      total += row.amount;
    });
    return total;
  };

  return (
    <main className="invoice-container">
      <section>
        <h1 className="heading company">Company</h1>
        <div className="right">
          <h1 className="heading">Invoice</h1>
          <SectionPoint obj={invoiceHeader} />
        </div>
      </section>
      <section className="person-detail">
        <div>
          <h4 className="heading">Invoice to</h4>
          <h2>{invoiceTo.name}</h2>
          <h5>{invoiceTo.company}</h5>
          <SectionPoint obj={invoiceTo.details} />
        </div>
        <div>
          <h3 className="heading">Payment Method</h3>
          <SectionPoint obj={paymentMethod} />
        </div>
      </section>
      <Table data={invoiceRows} />
      <section>
        <div className="term">
          <h5 className="heading">Terms & Conditions</h5>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              aliquam magnam corrupti.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
              aliquam?
            </li>
          </ul>
        </div>
        <p>
          {"Total : "}
          <span>{getTotal()}</span>
        </p>
      </section>
      <footer>
        <p>Authorized Sign.</p>
      </footer>
    </main>
  );
};

export default Invoice;
