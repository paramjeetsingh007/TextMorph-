import React, { useState } from 'react'

function About(props) {
  // const [myStyle ,setMyStyle]=useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
 
  // const [btnText,setbtnText]=useState("Enable dark mode")

  // const toggleStyle=()=>{
  
  //   if (myStyle.color==='black') {
  //     setMyStyle({
  //        color:'white',
  //   backgroundColor:'black',
  //   border: '1px solid white' 
  //     })
  //     setbtnText("Enable light mode")
      
  //   } else {
  //     setMyStyle({
  //   color:'black',
  //  backgroundColor:'white',
  //  border: '1px solid black' 
  //    })
  //    setbtnText("Enable dark mode")
      
  //   }
  // }

  let myStyle ={
    color:props.mode === 'dark' ? 'white':' #042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 ,74 , 104)' : 'white'
  }
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark' ? 'white':' #042743'}}>
        <h1 className='my-2'>About us</h1>
  <div className="accordion " id="accordionExample" >
  <div className="accordion-item "  >
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
      Lowercase Button
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle} >
      <div className="accordion-body">
      This is the first feature of Text Utilis. It allows you to <strong>convert text into lowercase</strong>, making it ideal for standardizing text formatting. This feature ensures your text adheres to a consistent case for readability or stylistic purposes.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
       Uppercase Button
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body" style={myStyle}>
      This feature focuses on uppercase transformation. With this, you can <strong>convert your text to uppercase</strong> for titles, headlines, or emphasizing specific content. This transformation can be performed instantly, helping you save time.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
      Word and Character Counting
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      The third feature of Text Utilis offers <strong>word and character counting </strong>along with an estimated reading time calculator. It gives you valuable insights into the structure and length of your text, enabling better optimization for readers.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3 ">
<button type="button" className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>
</div> */}

</div>
</>
    
  )
}

export default About