import React, {Component} from "react";
import PhraseAuthor from './PhraseAuthor';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <h1>Contact</h1>
                <PhraseAuthor
                    phrase="Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
                    author="Bernard M. Baruch"
                />
                <hr/>
                <div className="row">
                    <div className="col-sm-6">
                        <a title="Twitter" href="https://twitter.com/layahi82" target="_blank" rel="noopener noreferrer">
                            <span className="icon icon-twitter">layahi82</span>
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a title="GitHub" href="https://github.com/yduartep" target="_blank" rel="noopener noreferrer">
                            <span className="icon icon-github">yduartep</span>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <a title="StackOverflow"
                           href="https://stackoverflow.com/users/9264107/yahima-duarte?tab=profile" target="_blank" rel="noopener noreferrer">
                            <span className="icon icon-stackoverflow">Stackoverflow</span>
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a href="mailto:layahi@gmail.com">
                            <span className="icon icon-google">layahi@gmail.com</span>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <a title="Linkedin" href="https://www.linkedin.com/in/yahima-duarte-perez-4372755b/"
                           target="_blank" rel="noopener noreferrer">
                            <span className="icon icon-linkedin">Linkedin</span>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <hr/>
                </div>
            </div>
        );
    }
}

export default Contact;