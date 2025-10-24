import React from "react";


function TodoList() {
    const [todos, setTodos] = React.useState([
        { id: 1, text: '리액트 공부하기' },
        { id: 2, text: '컴포넌트 만들기' },
        { id: 3, text: '투두리스트 완성하기' },
    ]);

    const [inputText, setInputText] = React.useState('');

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputText.trim() === '') return;
        const newTodo = {
            id: Date.now(),
            text: inputText,
        };
        setTodos([...todos, newTodo]);
        setInputText('');
    };

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h2>투두리스트</h2>
            <div>
                <input
                    type="text"
                    placeholder="할 일을 입력하세요..."
                    value={inputText}
                    onChange={handleChange}
                />
                <button onClick={handleAddTodo}>추가</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
                    </li>
                ))}
            </ul>
            </div>
    );
}

export default TodoList;