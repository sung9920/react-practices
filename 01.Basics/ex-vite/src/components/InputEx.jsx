import { useState } from "react";

function InputEx() {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };
    
    const handleReset = () => {
        setText("");
    };
    
    return (
        <div>   
            <h2>Input Example</h2>
            <input 
                type="texy"
                placeholder="여기에 입력하세요..."
                onChange={handleChange}
                value={text}
            />
            <button onClick={handleReset}>초기화</button>
            <p>입력된 텍스트: {text}</p>
        </div>
    );
}

export default InputEx;