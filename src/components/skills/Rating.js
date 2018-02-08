import React, {Component} from 'react';

class Rating extends Component {
    render() {
        return (
            <div className="rating">
                {
                    [...Array(this.props.total)].map((e, i) => (
                        <span key={`raiting-${i}`} className={`fa fa-star ${i < this.props.rating ? 'checked' : ''}`}></span>
                    ))
                }
            </div>
        );
    }
}

export default Rating;