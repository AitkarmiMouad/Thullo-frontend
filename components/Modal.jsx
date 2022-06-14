import React from "react";

const Modal = ({ children, showModal, setShowModal , goBackTo}) => {

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={(e) => {setShowModal(false); goBackTo && goBackTo() }}
          >
            <div className="relative w-auto my-6 mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal