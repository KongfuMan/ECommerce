//used for admin to add or edite product information
import React, {Component} from 'react';

class ProductForm extends Component{
    render(){
        return(
            <div className="row">

                <div className="col s4 ">
                    <div className="card large">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="https://images-na.ssl-images-amazon.com/images/I/81Z7IM5RLeL._SL1500_.jpg" alt=''/>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-3">BestSellers<i className="material-icons mdi-navigation-more-vert right"></i></span>
                            <p><a href="/">This is a link</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-3">Card Title<i className="material-icons right mdi-navigation-close"></i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                </div>

                <div className="col s8 ">
                    <div className="card large darken-1">
                        <div className="card-content black-text">
                            <span className="card-title"><b>Sony Alpha a6000 Mirrorless Camera 16-50mm & 55-210mm Lenses & 128GB Bundle</b></span>
                            <p><b>By Sony</b></p>
                            <ul>
                                <li >
                                    FEATURES: High resolution with 24MP APS-C sensor and the world's fastest auto focus with 179 AF points and 11FPS
                                </li>
                                <li>
                                    RECORD: Record Full HD 1080/24/60P videos on the go. Has an ISO range of 100-25600 for low light photos
                                </li>
                                <li>
                                    EASILY SHARE PHOTOS: Instant sharing via your compatible tablet and smartphone with Wi-Fi and NFC
                                </li>
                            </ul>

                            <h6><b>Price:</b> $648.00</h6>


                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                                            <label htmlFor="textarea1"><b>Quantity</b></label>
                                        </div>
                                        <button className="btn waves-effect waves-light" type="submit" name="action">Add to Cart
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </form>
                            </div>





                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductForm;