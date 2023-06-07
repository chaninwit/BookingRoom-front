export default function Modal({ title, children }) {
  return (
    <>
      {/* You can open the modal using ID.showModal() method */}
      <button className="btn" onClick={() => window.my_modal_3.showModal()}>
        {title}
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <section className="">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
            ></a>
            <div className="w-full bg-white  md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  {title}
                </h1>
                {children}
              </div>
            </div>
          </section>
        </form>
      </dialog>
    </>
  );
}
