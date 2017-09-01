import React from 'react'
import classnames  from 'classnames'

export default ({ modalType, activeWhen, children }) => (
  <div className={classnames(modalType, 'modal', { show: activeWhen })}>
    <div className='modal-container'>
      {children}
    </div>
  </div>
)
