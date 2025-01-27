import React, { useState } from 'react'

function TextForm(props) {

  const [text,setText]=useState('')
  const [isBold, setIsBold] = useState(false); // State to track bold styling

  const handleUpClick=()=>{
    console.log("Uppercase was clicked",text);
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase!" ,"success")
    
  }
  const handleLoClick=()=>{
    console.log(" lowercase was clicked",text);
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase!" ,"success")
  }
  const handleclrClick=()=>{
    let newText=''
    setText(newText)
    props.showAlert("clear Text!" ,"success")
  }
  const handleboldClick=()=>{
    setIsBold(!isBold)
    props.showAlert("Text Bold!" ,"success")
  }
  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value)
    
  }
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;


  return (
    <>
      <div className='container'>
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`}id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder='enter text here' style={{fontWeight:isBold?"bold":"normal",backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black',}}></textarea >
      </div>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-2' onClick={handleUpClick}> Convert to Uppercase</button>
      <button disabled={text.length===0}  className='btn btn-primary mx-1 my-2' onClick={handleLoClick}> Convert to Lowercase</button>
      <button disabled={text.length===0}  className='btn btn-primary mx-1 my-2' onClick={handleclrClick}> Clear Text</button>
      <button disabled={text.length===0}  className='btn btn-primary mx-1 my-2' onClick={handleboldClick}> Bold text</button>

    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
       <h1 >your text summary</h1>
       <p > {wordCount} words and {text.length} characters</p>
       <p >{0.008 * wordCount} Minutes read</p>
       <h2 >Preview</h2>
       <p >{text.length>0?text:"Nothing to preview!"}</p>
    </div>

    </>

  )
}

export default TextForm