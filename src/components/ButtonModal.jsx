export default function ButtonModal({ title, children }) {
  // const [show, setShow] = useState(false);
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="btn">
        {title}
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{title}</h3>
          {children}
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7"></label>
      </div>
    </>
  );
}
