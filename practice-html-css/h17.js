//App.js
import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./child.js";
import TimerComponent from "./timer";

function App() {
    const text = "인프런 수강생 여러분 화이팅!";
    const sayHello = function () {
        return <h3>인프런 강의 너무 좋아</h3>;
    };
    const sayHello2 = function () {
        alert("안녕하세요");
    };
    return {
        <div>
            <h1>안녕하세요!</h1>
            <h2>{text}</h2>
	{sayHello()}
            <div onClick={sayHello2}>클릭해주세요</div>
            <TimerComponent />
        </div>
    );
}

//timer.js
import React from 'react';
function TimerComponent(){
    const [time, setTime] = React.useState(0)
    console.log('Component 업데이트!');
    React.useEffect(function () {
        setTime(time+1);
    }, []);
    return  (
        <div>
            <h3>{time}초</h3>
            <button>1씩 올려주세요</button> 
        </div>
    );
}

export default TimerComponent;