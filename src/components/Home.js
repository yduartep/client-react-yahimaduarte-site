import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="row introduction">
                    <p>Full Stack Engineer</p>
                    <p>creative & determined</p>
                    <p>passionate about coding</p>
                    <br/>
                    <div className="row">
                        <div className="col-sm-1">
                            <a title="Twitter" href="https://twitter.com/layahi82" target="_blank"
                               rel="noopener noreferrer">
                                <span className="icon icon-twitter"></span>
                            </a>
                        </div>
                        <div className="col-sm-1">
                            <a title="Linkedin" href="https://www.linkedin.com/in/yahima-duarte-perez-4372755b/"
                               target="_blank" rel="noopener noreferrer">
                                <span className="icon icon-linkedin"></span>
                            </a>
                        </div>
                        <div className="col-sm-1">
                            <a title="GitHub" href="https://github.com/yduartep" target="_blank"
                               rel="noopener noreferrer">
                                <span className="icon icon-github"></span>
                            </a>
                        </div>
                        <div className="col-sm-1">
                            <a href="mailto:layahi@gmail.com">
                                <span className="icon icon-google"></span>
                            </a>
                        </div>
                        <div className="col-sm-1">
                            <a title="StackOverflow"
                               href="https://stackoverflow.com/users/9264107/yahima-duarte?tab=profile" target="_blank"
                               rel="noopener noreferrer">
                                <span className="icon icon-stackoverflow"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;