import React from 'react';

class App extends React.Component{
    state ={message : ""}
    fun1 = (childData)=>{
        this.setState({message : childData})
    }
    render(){
        return(
            <div>
                <AppInner parentCallback =
                {this.fun1}/>
                <p> {this.state.message}</p>
            </div>
        );
    }
};export default App;

class AppInner extends React.Component{
    sendData = ()=>{
        setInterval(()=>{

            const currTime =Date();
            this.props.parentCallback(currTime);

        },3000);
    }
    componentDidMount(){
        this.sendData();
    }
    render(){
        return <div></div>
    }
};

