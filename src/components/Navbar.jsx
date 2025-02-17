import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Navbar(props) {
  return (
   <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'dark':'light'} `}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
       
      </ul>
    <div className='form-check form-switch'style={{color:props.mode==='dark'?'white':'black'}}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className='form-check-label' htmlFor="flexSwitchCheckDefault" style={{color:props.mode==='dark'?'black':'white'}}> change mode</label>
</div>
     
    </div>

  </div>
  
</nav>
   </>
  )
}
 
Navbar.propTypes =
{
  title:PropTypes.string.isRequired,
  aboutText:PropTypes.string
      
} 

Navbar.defaultProps={
  title:'Set title here',
  aboutText:'About text here'
}


export default Navbar