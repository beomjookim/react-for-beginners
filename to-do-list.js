// part of react app

import {useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => {setToDo(e.target.value)};
  const onSubmit = (e) => {
    e.preventDefault();
    setToDos(cur => [...cur, toDo]);
    setToDo("");
    console.log(toDos); // 여기서는 바로 반영이 안 되는데
    };
  console.log(toDos); // 여기서는 된다... 왜일까? 비동기라서 그런 것인가?!

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="what will you do?"/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, ind) => <li key={ind}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
