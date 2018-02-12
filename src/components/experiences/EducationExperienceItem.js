import React, {Component} from 'react';
import {format} from '../../util/DateUtil';
import PropTypes from 'prop-types';

class EducationExperienceItem extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-fixed">
                        <img
                            src={`images/companies/${this.props.data.logo}`}
                            alt={this.props.data.title}
                            className="thumbnail"/>
                    </div>
                    <div className="col-sm-10">
                        <h3>{this.props.data.title}</h3>
                        <h4>{this.props.data.subtitle}</h4>
                        <p className="subtitle">{format(this.props.data.from)}
                            - {format(this.props.data.to)}</p>
                        <p className="description">{this.props.data.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}
EducationExperienceItem.propTypes = {
    data: PropTypes.object
};
export default EducationExperienceItem;