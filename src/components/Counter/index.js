import { Component } from "react";
import "./index.css";


class Counter extends Component{
      //const {name}=this.props;
      state={ count:0}
    
      onIncrement =(params)=> {
      
        console.log("INCREMENT CLICKED");
        this.setState(prevState =>{
            return {count:prevState.count +1}
        })
        
      }
      onDecrement=()=>{
        this.setState(prevState =>{
            return{count:prevState.count -1}

        })
        console.log("decrese clicked")
        
      }
      render(){
      const {count}=this.state;
        return(
            <div className="cbody">
            <h1 className="cheading"> Counter App </h1>
            <p className="cvalue">{count}</p>
            <button className="button" onClick={this.onIncrement}> INCREMENT</button> <span> </span>
            <button  className="button" onClick={this.onDecrement}>DECREMENT</button>
              
              <div className="dclass">
                <footer> Developed By Appidi Yashwanth Reddy</footer>
              </div>
            </div>
        
        )
        
    }
}


export default Counter;