import React, {Component} from 'react';
import './ProjectPreview.css';
import Modal from '../Modal';
import PropTypes from 'prop-types';

class ProjectPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
    }

    openModal(e) {
        e.preventDefault();
        this.setState({isModalOpen: true})
    }

    closeModal() {
        this.setState({isModalOpen: false})
    }

    render() {
        return (
            <div>
                <Modal
                    id={`modal-${this.props.id}`}
                    isOpen={this.state.isModalOpen}
                    imgUrl={this.props.imageUrl}
                    onClose={() => this.closeModal()}/>
                <figure className="preview-figure">
                    <img src={this.props.imageUrl} alt={this.props.title} className="preview"/>
                    <figcaption className="preview-info">
                        <h3>{this.props.title}</h3>
                        <hr/>
                        <p>{this.props.description}</p>
                        <p className="subtitle">Tags:</p>
                        <p>{this.props.tags}</p>
                        <p className="subtitle">Year:</p>
                        <p>{this.props.year}</p>
                        {/*<button onClick={(e) => this.openModal(e)}>zoom</button>*/}
                    </figcaption>
                </figure>
            </div>
        );
    }
}
ProjectPreview.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.string,
    imageUrl: PropTypes.string,
    year: PropTypes.number
};
export default ProjectPreview;