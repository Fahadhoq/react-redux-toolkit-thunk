import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import Todos from './component/Todos';
import CounterView from './features/counter/CounterView';
import PostView from './features/posts/PostView';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React redux-axios-thunk-toolkit</h1>
      {/* <Counter />
      <Todos /> */}
      {/* <CounterView /> */}
      <PostView />
    </div>
  );
}

export default App;
