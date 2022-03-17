import logo from './logo.svg';
import './App.css';
import FunComponent from './components/FunComponent';
import ClassComponent from './components/ClassComponent';
import CounterState from './components/CounterState';
import HookCounter from './components/HookCounter';
function App() {
  return (
    <div className="App">
      <h1>React Application</h1>
      {/* <FunComponent name="Jasmine"></FunComponent>
      <FunComponent name="Kaur"></FunComponent>
      <ClassComponent name="Jasmine"></ClassComponent>
      <ClassComponent name="Kaur"></ClassComponent>
      <CounterState></CounterState> */}
      <HookCounter></HookCounter>
    </div>
  );
}

export default App;
