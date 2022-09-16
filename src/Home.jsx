import './index.css';
import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('Linus');
  const [age, setAge] = useState(20);

  const handleClick = () => {
    setName('Mario')
    setAge(60);
  }

  return (
    <div className="b-home">
      <h1 className="c-title">Homepage</h1>
      <button onClick={handleClick}>Click me</button>
      <p> { name } is { age } years old</p>
    </div>
  );
}

export default Home;