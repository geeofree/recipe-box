import React, { Component, Children, cloneElement } from 'react'
import './modal.style.sass'

import { connect } from 'react-redux'
import classnames  from 'classnames'

import ModalContainer from './modal.container'
import ModalHeader from './modal.header'
import ModalBody from './modal.body'

const Modal = ({ type, title, currentModal, children }) => (
  <ModalContainer 
		modalType={type}
		activeWhen={currentModal === type}>
  	<ModalHeader title={title} />
  	<ModalBody children={children}/>
  </ModalContainer>
)

const mapStateToProps = ({ modal }) => ({
  currentModal: modal.currentModal
})

export default connect(mapStateToProps)(Modal)
