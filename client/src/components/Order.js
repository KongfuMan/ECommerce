import React, {Component} from 'react';
import {connect} from 'react-redux'


class Order extends Component{
    renderContent(){

    }
    render(){
        return(
            <div>Order!</div>
        );
    }
}

const mapStateToProps = ({auth})=>{
    return {auth : auth};
}

export default connect(mapStateToProps)(Order);