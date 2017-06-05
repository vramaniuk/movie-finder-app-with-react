import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'test'
        }
    }

    btnOnclick() {
        document.querySelector('h1').classList.toggle('changeColor');
    }

    render() {
        console.log(`State ${this.state.text}`);
        return (
            <div style={{backgroundColor: 'lightcyan'}}>
                <h1>App works!!!</h1>
                <h3 style={{backgroundColor: 'grey'}}>It's really working!</h3>
                <button onClick={this.btnOnclick.bind(this)}>{this.state.text}</button>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#app')
);