import "./App.css";
import Todo from "./Components/Todo/Todo";
import Main from "./Components/UseEffect/Main";
import Wrapper from "./Components/Wrapper/Wrapper";

import Post from "./Components/UseEffect/Post";

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <Post />
      </Wrapper>
    </div>
  );
}

export default App;
