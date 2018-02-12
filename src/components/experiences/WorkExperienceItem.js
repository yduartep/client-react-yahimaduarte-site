import React, {Component} from "react";
import {format} from '../../util/DateUtil';

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
                        <p className="description">
                        <div
                            dangerouslySetInnerHTML={{
                            __html: this.props.data.description
                        }}/>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
WorkExperienceItem.propTypes = {
    data: {}
};
export default WorkExperienceItem;