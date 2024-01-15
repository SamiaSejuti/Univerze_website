import React from 'react';

const ModalHint = () => {
  const openHintModal = () => {
    const hintModal = document.getElementById("my_modal_3");
    hintModal.showModal();
  };

  return (
    <>
      {/* Button to trigger the modal */}
      <div className="flex justify-center items-center w-24 mx-auto">
        <button className="btn bg-yellow-500 py-1 text-xs w-full" onClick={openHintModal}>hint</button>
      </div>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg">Hint!</h3>
          <p className="py-4">This is your hint.</p>
        </form>
      </dialog>
    </>
  );
};

export default ModalHint;
