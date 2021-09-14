// App.js
import ChildComponent from './ChildComponent';
function ParentComponent(){
	return (
		<div>
			<h3>나는 부모입니다.</h3>
			<div>
				<h1>내 자식을 소개합니다 </h1>
				<ChildComponent name="민수" age={27}/> 
				<ChildComponent name="그랩" age={28}/>
			</div>
		</div>
	)
}

export default ParentComponent

//child.js
function ChildComponent(props){ 
	//const name = props.name;
	//const age = props.age;
	//return <h3>나는 {name}입니다. {age}살입니다.</h3>

	const { name, age } = props;
	return (
		<div>
			<p>
				이름은 {name}이며 {age}살입니다.
			</p>
		</div>
	);
}

export default ChildComponent;