import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Payment extends Component{
    render(){
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <Link to="/"><hr9><b>Your Order is being prepared! Click to return to Home Page</b></hr9></Link>
                <br/>
                <br/>
            </div>

        );
    }
}

export default Payment;