import React, {Component} from "react";
import {format} from '../../util/DateUtil';
import PropTypes from 'prop-types';

class WorkExperienceItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-fixed">
                        <img src={`images/companies/${this.props.data.logo}`}
                             alt={this.props.data.title} className="thumbnail" />
                    </div>
                    <div className="col-sm-10">
                        <h3>{this.props.data.title}</h3>
                        <h4>{this.props.data.company}</h4>
                        <p className="subtitle">{format(this.props.data.from)} - {format(this.props.data.to)}</p>
                        <p className="subtitle">{this.props.data.city}, {this.props.data.country}</p>
                        <div className="description"
                            dangerouslySetInnerHTML={{
                            __html: this.props.data.description
                        }}/>                        
                    </div>
                </div>
            </div>
        );
    }
}
WorkExperienceItem.propTypes = {
    data: PropTypes.object
};
export default WorkExperienceItem;