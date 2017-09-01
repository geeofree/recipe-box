import React          from 'react'
import { connect }    from 'react-redux'
import { hideModals } from '../../../actions/modal.actions'

import Button from '../../Commons/Button'
import Header from '../../Commons/Header'

const ModalHeader = ({ title, hideModals }) => (
  <Header className="modal-header">
    <h2 className="modal-title">{title}</h2>
    <Button
      text="Close"
      className="modal-close"
      onClick={() => hideModals()} />
  </Header>
)

const mapDispatchToProps = (dispatch) => ({
  hideModals: () => dispatch(hideModals())
})

export default connect(null, mapDispatchToProps)(ModalHeader)
