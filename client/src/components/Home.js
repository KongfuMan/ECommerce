import React, {Component} from 'react';
import ProductList from './Product/ProductList';
// import pagination from './pageination';

class Home extends Component{
    render(){
        return(
            <div>
                <ProductList/>
            </div>

        );
    }
}

export default Home;