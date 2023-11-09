import React, { useState } from "react";


const TextConvert = (props) => {
    let [textareaText, setTextareaText] = useState("");
    // for changing text
    function handleOnChange(event) {
        setTextareaText(event.target.value);
    }
    function convertText(e) {
        e.preventDefault();
        let convertedText = textareaText.toUpperCase();
        setTextareaText(convertedText);
        props.showAlert("Converting Succsss", "Success");
    }
    function clearText(e) {
        e.preventDefault();
        setTextareaText("");
    }

    function copyText() {
        const copyText = document.getElementById("box");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }
    // function for counting words in the textArea
    function countWords(text) {
        // Loop through the text
        // and count spaces in it
        var numWords = 0;
        let splitedText = text.split(" ");
        for (var i = 0; i < splitedText.length; i++) {
            if (splitedText[i] !== "") {
                numWords += 1;
            }
        }
        return numWords;
    }
    return (
        <div className="main">
            <div className={`text-area-form container`}>
                <h3 style={{ color: props.mode === "light" ? "#000000d4" : "white" }}>Write Something In The Textbox</h3>
                <div className="input-area">
                    <form>
                        <textarea rows="8" cols="3" value={textareaText} onChange={handleOnChange} id="box" style={{ backgroundColor: props.mode === "dark" ? "rgba(239, 238, 238, 0.05)" : "white", color: props.mode === "dark" ? "white" : "#000000d4" }}></textarea>
                        <div className="buttons">
                            <button onClick={convertText} type="submit" className="btn btn-primary mx-1 py-1">Convert To Uppercase</button>
                            <button type="button" className="btn btn-primary mx-1 py-1" onClick={clearText}>Clear Text</button>

                            <button type="button" className="btn btn-primary py-1" onClick={copyText}>Copy Text</button>
                        </div>

                    </form>
                </div>
            </div>

            <div className={`container mt-3`} style={{ color: props.mode === "dark" ? "white" : "#000000d4" }}>
                <h3>Your Text Summary</h3>
                <p><span>{textareaText === "" ? 0 : countWords(textareaText)}</span> Words, <span>{textareaText === "" ? 0 : textareaText.split("").length - (textareaText.split(" ").length - 1)}</span> characters and <br /> {0.008 * textareaText.split("").length} minute's read.</p>
            </div>

        </div>
    )
}
export default TextConvert;