import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
    render() {
        return (
            <div className="rating">
                {[...Array(this.props.total)].map((e, i) => (
                    <span
                        key={`raiting-${i}`}
                        className={`fa fa-star ${i < this.props.rating ? 'checked' : ''}`}>
                    </span>
                ))
}
            </div>
        );
    }
}
Rating.propTypes = {
    total: PropTypes.number,
    rating: PropTypes.number
};
export default Rating;