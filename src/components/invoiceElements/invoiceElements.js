import "./invoiceElements.scss";

const SectionPoint = ({ obj }) => {
  return (
    <div className="section-point">
      {Object.keys(obj).map((key, i) => (
        <div key={`point-${i}`} className="section-row">
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
