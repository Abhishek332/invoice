import "./invoiceElements.scss";

const SectionPoint = ({ obj }) => {
  return (
    <div className="section-point">
      {Object.keys(obj).map((key) => (
        <div className="section-row">
          <div>
            <b>{`${key} : `}</b>
          </div>
          <div>{obj[key]}</div>
        </div>
      ))}
    </div>
  );
};

export { SectionPoint };
