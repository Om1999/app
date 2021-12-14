import React, { useState } from 'react';


export default function TextForm(props) {

    const [text, setText] = useState("");


    const handleUpClick = ()=>{
        //console.log("UpperCase was clicked");

        let newText = text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();

        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleTiClick = ()=> {
        let newText = text.toLowerCase();
        newText = newText.split(" ");

        for(var i =0;i< newText.length;i++){
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        newText = newText.join(" ");
        setText(newText);
    }

    const handleClClick = ()=> {
       setText("");
       props.showAlert("Text has been removed","success");
    }

    const handleCopy = ()=> {
        let text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed ","success");
    }

    return (
        <>
        <div className="container" style={{color : props.mode ==='dark'? 'white':'#042743'}}>
            <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode ==='dark'? 'grey':'white',
            color : props.mode ==='dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-success mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-warning mx-1" onClick={handleTiClick}>Convert To TitleCase</button>
            <button className="btn btn-dark mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-info mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-danger mx-1" onClick={handleClClick}>Clear Text</button>


        </div>
        <div className="container my-3" style={{color : props.mode ==='dark'? 'white':'#042743'}} >
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>This can be read in {0.008 * text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in the textbox above to preview here"}</p>
        </div>
        </>
    )
}
