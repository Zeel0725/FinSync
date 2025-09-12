import React from 'react';

class AppInner extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const txtStyle = {color : this.props.color}
        return (
            <span style={txtStyle}>{this.props.name}</span>
        )
    }
}

class App extends React. Component {
    state = { childColor:"green", name: "John" }
    changeColor = () => {
        const newColor =
document.getElementById("colorbox") .value;
    this.setState({ childColor: newColor });
    }
    changeName = () => {
        const newName = document. getElementById ("namebox"). value;
        this.setState({ name: newName }) ;
    }
render () {
    console. log("Inside render");
    return ( 
        <div>
            Color <input type="text" onChange={this.changeColor}
                id="colorbox" /> <br />
            Name <input type="text" onChange={this.changeName}
                id="namebox" />
            <AppInner color={this.state.childColor}
                name={this.state.name} />
    </div>
    );
}
};
export default App;