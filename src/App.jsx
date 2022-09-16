import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const liked =50;

  return (
    <div className="App">
      <h1 className="c-title">{ title }</h1>
      <p className="c-text">Liked { liked } times</p>
    </div>
  );
}

export default App;
