// import React from 'react';

// function Child(props) {
//   return (
//     <div>
//       <h2>Hello from Child</h2>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

// export default Child;


// tc.js (Child Component)
import React from 'react';

class Child extends React.Component {
  constructor() {
    super();
    this.state = {
      name:'Komal',
      email: 'Komal.jha@cloudeq.com',
      count: 0
    };
  }
 
  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };
   updatestate(){
    this.setState({
      name:'Renu',
      email:'Renu.pal@cloudeq.com'
    })
   }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
         <br></br>
         <br></br>
         <br></br>

        <h1>Hello {this.state.name}</h1>
        <h1>Email: {this.state.email}</h1>
        <button onClick={()=>{this.updatestate()}}> Update </button>
        {/* <img src={require('./over.jpg')} alt='over' /> */}
      </div>
    );
  }
}

export default Child;



