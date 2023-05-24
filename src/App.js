import React, {Component} from 'react';
import "./App.css"
export default class App extends Component {
    btnStyle = {
        color:"#fff",
        border:"none",
        padding:"5px 9px",
        borderRadius:"50px",
        cursor:"pointer",
        float: "right"
    }
    getStyle = () => {
        return {
            padding:"10px",
            borderBotton: "1px #ccc dotted",
            textDecoration: 'none'
        }
    }
    render() {
    return (
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>test</h1>
                </div>
                <div style={this.getStyle()}>
                    <input type={"checkbox"} defaultChecked={false}/>
                      아이고
                    <button style={this.btnStyle}>x</button>
                </div>
            </div>
        </div>
    )
    }
}