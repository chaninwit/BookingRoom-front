export default function Modal({ title, children, Close }) {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="btn">
        {title}
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <div>{children}</div>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              {Close}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
