//import logo from './logo.svg';
//import { Kom } from './first';
import "./index.css";
//import tc from './component/T.js'
import Child from "./component/T.js";

function App() {
  
  // const name="komal";
  // const age=22
  return (
    // <div>
    //    <h1>Hello from App Component</h1>
      
    //   <ht name={name} age={age} />
    // </div>
   <div>
    <h1>it is parent</h1>
    <Child />
   </div>
  );
}

export default App;
