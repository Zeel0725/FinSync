import React from 'react';

// mounting
// class App extends React.Component{
//     constructor(props) {
//     super(props)
//         console.log("Inside the constructor")
//     }
// componentDidMount = ()=>{
//     console.log("Inside component did mount")
// }
// render(){
//     console. log("Inside render method")
//     return(
//         <div> The component is rendered </div>
//     )}
// };
// export default App;


// updates
// class App extends React.Component {
//     state = {counter: 0 };
//     incrementCounter = () => this.setState({counter: this.state.counter+1});

//         shouldComponentUpdate() {
//             console. log("Inside shouldComponentUpdate")
//             return true;
//     }
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         console.log("Inside getSnapshotBeforeUpdate"); 
//         console.log("Prev counter is"+prevState.counter); 
//         console.log("New counter is"+this.state.counter);
//         return prevState.counter;
//     }
//     componentDidUpdate() {
//         console.log("Inside componentDidUpdate")
//     }
//     render() {
//         console.log("Inside render")
//         return (
//         <div>
//             <button onClick={this.incrementCounter}>Click Me!</button>
//             {this.state.counter}
//         </div>
//         );
//     }
// }


// unmounting
// class AppInner extends React.Component {
//     componentWillUnmount() {
//         console.log("This component will unmount");
//     }
//     render(){
//         return <div>Inner component</div>;
//     }
// }
// class App extends React.Component {
//     state = { innerComponent: <AppInner /> };
//     componentDidMount() {
//         setTimeout (() => {
//             this.setState({ innerComponent: <div>unmounted</div>
//         }) ;
//     }, 5000);
//     }
//     render() {
//         console. log("Inside render");
//         return (
//             <div>      
//                 {this.state.innerComponent}
//             </div>
//         );
//     }
// };
// export default App;