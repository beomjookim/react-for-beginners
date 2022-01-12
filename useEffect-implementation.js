// part of react app

import {useState, useEffect} from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {setCounter((cur) => cur+1)};
  const onChange = (e) => {setKeyword(e.target.value)};
  console.log("i run all the time");
  useEffect(() => {console.log('i run only when keyword changes!')}, [keyword]);
  useEffect(() => {console.log('i run only when counter changes!')}, [counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here!" />
      <h1>{counter}</h1>
      <button onClick={onClick}>HI</button>
    </div>
  );
}

export default App;
