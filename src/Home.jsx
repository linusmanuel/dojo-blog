import './index.css';

const handleClick = () => {
  alert('Hello Ninja')
}

const handleClickAgain = ( name ) => {
  alert('Hello ' + name)
}

const Home = () => {
  return (
    <div className="b-home">
      <h1 className="c-title">Homepage</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClickAgain('Linus')}>Click me Again</button>
    </div>
  );
}

export default Home;