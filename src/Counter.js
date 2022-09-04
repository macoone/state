import React, { Component } from "react";
import pf from './res/pht.jpg'
class Counter extends Component {
    constructor() {
        super();
        this.state = {
        /*FullName:'Ahmed Affes',
        Bio:'Legends never die',
        Profession:'student',*/
          Person:{fullName:' Ahmed Affes',
          bio:' Legends never die',
          imgSrc:pf,
          profession:' student',
        },
        counter: 0,
        timer: 0,
      show:false,
     };
    }
    componentDidMount() {
      setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
    }
    render(){

      const {fullName,bio,imgSrc,profession}=this.state.Person;
      return(
        <div>
          
          <div className="info">
          <p>fullName:{fullName}</p>
          <p>bio:{bio}</p>
          <p>profession:{profession}</p>
          <img src={imgSrc} className='img' alt="" />
          <h1>{this.state.timer}</h1>
          </div>

        </div>
      );

    }
    
}

export default Counter;
/* <p>{this.state.FullName}</p>
<p>{this.state.Bio}</p>
<p>{this.state.Profession}</p>
<div className='info'>
        <ul>
            { this.state.array.map((el,i)=>(
            <ul>{el}</ul>
            ))}
        </ul>
        </div>
        <div className='prof'>
        <ul>
            { this.state.FBP.map((el,i)=>(
            <ul>{el}</ul>
            ))}
        </ul>
        </div>
          <img src={this.state.imgsrc} alt="" />
          
*/