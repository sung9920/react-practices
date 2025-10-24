import { useEffect } from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Use Effect 실행 count: ${count}`);
        document.title = `카운트 Count: ${count}`;
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>클릭하기</button>
        </div>
    );
}

export default Counter;