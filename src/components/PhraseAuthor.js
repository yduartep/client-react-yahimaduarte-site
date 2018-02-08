import React, {Component} from "react";
import './PhraseAuthor.css';
import PropTypes from 'prop-types';

class PhraseAuthor extends Component {
    render() {
        return (
            <section id="phrase">
                <p className="lead">{`"${this.props.phrase}"`}</p>
                <p className=" lead author">{this.props.author}</p>
            </section>
        );
    }
}
PhraseAuthor.propTypes = {
    phrase: PropTypes.string,
    author: PropTypes.string
};
export default PhraseAuthor;