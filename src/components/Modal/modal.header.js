import React from 'react'
import { connect } from 'react-redux'

import { hideModals } from '../../actions/modal.actions'

const ModalHeader = ({ title, hideModals }) => (
  <div className="modal-header">
    <h2 className="modal-title">{title}</h2>
    <button
      className="modal-close"
      onClick={() => hideModals()}>Close</button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  hideModals: () => dispatch(hideModals())
})

export default connect(null, mapDispatchToProps)(ModalHeader)
