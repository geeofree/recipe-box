import React from 'react'

const Image = ({ url }) => (
  <div className="recipe-img" style={{ backgroundImage: `url(${url})` }} />
)

export default Image
