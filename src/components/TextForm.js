import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked : " + text)
        let newText = text.toUpperCase()
        setText(newText)
       ;
    }
    const handleDownClick =()=>{
        console.log("LowerCase was Clicked : "+ text)
        let newText1 = text.toLowerCase()
        setText(newText1)
       
    }
    const handleCopy = ()=>{
        console.log("copied");
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        
    }
    const removeExtraSpace = ()=>{
        console.log("removed extra space")
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        
    }
    const  handleClear =()=>{
        let newText2 = '';
        setText(newText2);
        
    }

    

    const handleOnChange =(event)=>{
        console.log("On Change")
        setText(event.target.value)
    }


    const [text ,setText]= useState("")
    
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className="my-4">{props.heading}</h1>

            <div className="mb-4" >
                <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='dark'?'#353b45ba':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to UpperCase</button>  
            <button className="btn btn-primary mx-1 my-2" onClick={handleDownClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-2" onClick={removeExtraSpace} >Remove Extra Space</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleCopy} id="mybox">Copy Text</button>
            <button className="btn btn-success mx-1 my-2" onClick={handleClear} id="mybox">Clear Text</button>

        </div>
        <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}  >
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p> {0.008 *text.split(" ").length-0.008 } minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text-box above to preview it here "}</p>
        </div>
        <hr />

        </>
    )
}
