export default function ButtonModal({ title, children }) {
  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button className="btn" onClick={() => window.my_modal_1.showModal()}>
        {title}
      </button>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">{title}!</h3>
          <p className="py-4">{children}</p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
