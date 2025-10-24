import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export function Panel({children}) {
    const { theme } = useContext(ThemeContext);

    const style = {
        backgroundColor: theme === 'light' ? '#FFF' : '#333',
        color: theme === 'light' ? '#333' : '#EEE',
        border: '1px solid #CCC',
        padding: '20px',
        margin: '10px 0',
    };

    return ( 
        <div style={style}>
            {children}
        </div>
    );
}

export function ToogleBuutton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            현재 테마: {theme} (클릭하여 변경)
        </button>
    );
}