import React, { Component, Children, cloneElement } from 'react'
import './modal.style.sass'

import { connect } from 'react-redux'
import classnames  from 'classnames'

import ModalHeader from './modal.header'

const Modal = ({ headerTitle, modalType, currentModal, children }) => (
  <div className={classnames(modalType, 'modal', { show: currentModal === modalType })}>
    <div className='modal-container'>
      <ModalHeader title={headerTitle} />
      <div className="modal-body">
        {children}
      </div>
    </div>
  </div>
)

const mapStateToProps = ({ modal }) => ({
  currentModal: modal.currentModal
})

export default connect(mapStateToProps)(Modal)
