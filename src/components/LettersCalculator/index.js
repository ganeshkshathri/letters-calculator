import { Component } from "react";
import './index.css'

class LettersCalculator extends Component{
    state={count:0}
    textEnter=(event)=>{
        let text = event.target.value
        
        let length = text.length
       this.setState({count:length})
        
    }
    render(){
        const {count}=this.state
        return(
            <div className="container">
                <div className="text-content">
                    <h1 className="heading">Calculate the Letters you enter</h1>
                    <p className="para">Enter the phrase</p>
                    <input onChange={this.textEnter} className="input-box" type="text" placeholder="Enter the phrase" />
                    <br />
                    <button className="button">No. of Letters: {count}</button>
              </div>
                <div className="image-content">
                    <img className="imge-style" src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" alt="letters calculator" />
                </div>
            </div>
        )
    }
}
export default LettersCalculator