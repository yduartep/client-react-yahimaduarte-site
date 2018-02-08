import React, {Component} from "react";
import './PhraseAuthor.css';

class PhraseAuthor extends Component {
    render() {
        return (
            <section id="phrase">
                <p className="lead">"{this.props.phrase}"</p>
                <p className=" lead author">{this.props.author}</p>
            </section>
        );
    }
}

export default PhraseAuthor;