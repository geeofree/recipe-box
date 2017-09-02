import React          from 'react'
import { connect }    from 'react-redux'
import resetDefaults from '../../../thunks/resetDefaults'

import Button from '../../Commons/Button'
import Header from '../../Commons/Header'

const ModalHeader = ({ title, resetDefaults }) => (
  <Header className="modal-header">
    <h2 className="modal-title">{title}</h2>
    <Button
      text="Close"
      className="modal-close"
      onClick={() => resetDefaults()} />
  </Header>
)

const mapDispatchToProps = (dispatch) => ({
  resetDefaults: () => dispatch(resetDefaults())
})

export default connect(null, mapDispatchToProps)(ModalHeader)
