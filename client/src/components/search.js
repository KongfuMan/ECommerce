import React, {Component} from 'react';


class Search extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">textsms</i>
                                <input type="text" id="autocomplete-input" className="autocomplete"/>
                                    <label htmlFor="autocomplete-input">Search</label>
                            </div>
                        </div>
                    </div>
                    <div id="toggle-container" className="col s4 cards-container">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="http://materializecss.com/images/office.jpg" alt=''/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons mdi-navigation-more-vert right"></i></span>
                                <p><a href="/">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right mdi-navigation-close"></i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="http://materializecss.com/images/office.jpg" alt=''/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons mdi-navigation-more-vert right"></i></span>
                                <p><a href="/">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right mdi-navigation-close"></i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Search;