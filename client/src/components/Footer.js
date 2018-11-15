import React from 'react';

const Footer = () => (
    <footer className="page-footer">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">This Website is Created By</h5>
                    <p className="grey-text text-lighten-4">Liang Chen  Sonsg Fang Haodi Sun</p>
                </div>
                <div className="col l4 offset-l2 s12">
                    <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                © 2018 Copyright Reserved
                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
        </div>
    </footer>
);

export default Footer;