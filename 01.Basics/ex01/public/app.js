function App() {
    const App = document.createElement('div');
    App.textContent = 'Hello React!!';
    return App;
}

document.getElementById('root').appendChild(App());