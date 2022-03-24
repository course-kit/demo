import React from 'react'
import Modal from 'react-modal'
import { XIcon } from '@heroicons/react/solid'
import './FeatureDisabled.css'

Modal.setAppElement('#root')

function FeatureDisabled(props) {
  function closeModal() {
    props.closed()
  }

  return (
    <span>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={closeModal}
        contentLabel="Enroll"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="close">
          <XIcon onClick={closeModal} />
        </div>
        <div>
          <p>This feature has been disabled for this demo.</p>
          <button className="button primary" onClick={closeModal}>
            Okay
          </button>
        </div>
      </Modal>
    </span>
  )
}

export default React.memo(FeatureDisabled)
