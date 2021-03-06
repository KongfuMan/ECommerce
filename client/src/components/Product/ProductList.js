import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as actions from '../../actions/products'

class ProductList extends Component{
    componentDidMount(){
        this.props.fetchProducts();
    }
    renderContent(){
        return this.props.productList.map(prod=>{
            console.log(prod);
            return(
                <div key={prod.productId} id="toggle-container" className="col s3 cards-container">
                    <div className="card small">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="https://images-na.ssl-images-amazon.com/images/I/719wKCjcGfL._SL1500_.jpg" alt=""/>
                        </div>

                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-3">{prod.name}<i className="material-icons mdi-navigation-more-vert right"></i></span>
                            <p><Link to={'/productform/' + prod.productId}>Details</Link></p>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render(){
        return(

            <div>

                <div className="row">
                    <div className="col s12">
                        <img className="responsive-img" src="https://images-na.ssl-images-amazon.com/images/G/01/img18/events/cybermonday/gw/cmdw_gw_desktop_editorial_2300x646_v3._CB479800167_.jpg" alt=''/>
                        {this.renderContent()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({productList})=>{
    return {productList}
};

export default connect(mapStateToProps,actions)(ProductList);
