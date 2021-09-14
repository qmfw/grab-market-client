// App.js (src 내부)
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <h1>안녕하세요!</h1>
        <ChildComponent />
        <ChildComponent />
        <ChildComponent />
        <ChildComponent />
    </div>
  );
}

export default App;

// 안녕하세요!
// 나는 자식이다
// 나는 자식이다
// 나는 자식이다
// 나는 자식이다

// child.js
function ChildComponent() {
    return <p>나는 자식이다</p>;
}

export default ChildComponent;