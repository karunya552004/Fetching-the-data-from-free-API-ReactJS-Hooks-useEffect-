// React List

// import React from 'react';
// import ReactDOM from 'react-dom';

// const Mywebsite=["Home","About Us","Product","Services","Contact us"];
// const websitemenu= Mywebsite.map((Mywebsite)=>{
//   return <h3>{Mywebsite}</h3>
// });

// ReactDOM.render(<ul>{websitemenu}</ul>,document.getElementById('root'));




// React Props

// import React from 'react';
// import ReactDOM from 'react-dom';
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   const element = <Welcome name="Everyone" />;
//   root.render(element);




//React setState and ReactEvent

// import React from 'react';
// import ReactDOM from 'react-dom';

// class ReactState extends React.Component{
//   constructor(){
//     super();
//     this.state={Mywebsite:"Welcome to my page"}
//   }
//   changethevalue=()=>{
//     this.setState({Mywebsite:"This is my page"})
//   }
//   render(){
//     return <div>
//       <h1>{this.state.Mywebsite}</h1>
//       <button type="button" onClick={this.changethevalue}>Click here</button>

//     </div>
//   }
// }

// ReactDOM.render(<ReactState/>,document.getElementById('root'));






//React State

// import React from 'react';
// import ReactDom from 'react-dom';

// class ReactState extends React.Component{
//   constructor(){
//     super();
//     this.state={MyWebsite:"Welcome to my page", Content:" haii hello"}
//   }
//   render(){
//     return <div><h1>{this.state.MyWebsite},{this.state.Content}</h1>
//     </div>
//   }
// }
// ReactDom.render(<ReactState/>,document.getElementById('root'));

// import ReactDOM from 'react-dom';
// import React, { useState } from 'react';

// function Welcome() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       {count}
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </div>
//   );
// }

// ReactDOM.render(<Welcome />, document.getElementById('root'));


// import ReactDOM from'react-dom';
// import React, {useState, useEffect} from 'react';
// function Msg(){
//   const[count,setCount]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count=>count+1)
//     },2000);
//   });
//   return(
//     <h1>webiste counting details {count}times</h1>
//   )
// }
// ReactDOM.render(<Msg/>,document.getElementById('root'));

// import ReactDOM from 'react-dom';
// import React, { useState, useEffect } from 'react';

// function Msg() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count < 10) {
//       const timer = setTimeout(() => {
//         setCount(count => count + 1);
//       }, 2000);

//       return () => clearTimeout(timer); // Clean up the timer on unmount
//     }
//   }, [count]);

//   return (
//     <h1>Website counting details {count} times</h1>
//   );
// }

// ReactDOM.render(<Msg />, document.getElementById('root'));

import ReactDOM from 'react-dom';
import React, {useState,useEffect} from 'react';

function Userdemo(){
    const[user,setUsers]=useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data=>{
        setUsers(data);
        setLoading(false);
      })
      .catch(error=>{
        console.error("if it is not loading, will be error msg");
        setLoading(false);
      });
    },[]);
    if(loading){
        return<p>Loading</p>;
    }
    return(
        <div>
            <h2>List out the users in API</h2>
            <ul style={{listStyleType:"none"}}>
                {user.map(user=>(
                    <li key = {user.id} >{user.id} : {user.name}</li>
                )
                )}
            </ul>
        </div>
    );
}ReactDOM.render(<Userdemo/>,document.getElementById('root'));

