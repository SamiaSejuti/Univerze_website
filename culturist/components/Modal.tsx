import React from 'react';

const Modal = () => {
  return (
    <dialog id="my_modal_4" className="modal">
      <form method="dialog" className="modal-box w-11/12 max-w-l" style={{ backgroundColor: '#CDFFCC' }}>
        <h3 className="font-bold text-lg" style={{ fontFamily: 'Revalia-Regular, sans-serif' }}>HOW TO PLAY:</h3>
        <p className="py-4" style={{ fontFamily: 'Revalia-Regular, sans-serif' }}>
  Simply choose the correct answer.<br /><br />
  To get a hint click on the &quot;Hint&quot; button.<br /><br />
  You have 20 seconds for each question.
</p>

        <div className="modal-action" style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="btn"
            onClick={() => document.getElementById('my_modal_4').close()}
            style={{
              backgroundColor: 'yellow',
              color: 'black'
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = 'orange'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'yellow'}
          >
            Got it
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default Modal;
