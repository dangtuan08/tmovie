import React from 'react'

import bg from '../../assets/footer-bg.jpg'
import './catalogHeader.scss'
function CatalogHeader(props) {
  return (
    <div className='catalog-header' style={{backgroundImage: `url(${bg})`}}>
        <h2>{props.title}</h2>
    </div>
  )
}

export default CatalogHeader