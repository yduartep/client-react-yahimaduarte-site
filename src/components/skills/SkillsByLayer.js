import React from 'react';
import Rating from './Rating';
import {graphql} from 'react-apollo';
import {skillsByLayerQuery} from '../../graphql/queries';
import CommonUtil from '../../util/CommonUtil';
import './SkillsByLayer.css';
import PropTypes from 'prop-types';

const SkillsByLayer = ({
    title,
    data: {
        loading,
        error,
        skillsByLayer
    }
}) => {
    if (loading) {
        return <h1>Loading ...
            <img src="images/loading-large.gif" alt="Loading ..."/></h1>;
    }
    if (error) {
        return <p>Error loading Skills data ...</p>;
    }
    return (
        <div className="container-fluid skills-content">
            <h2>{title}</h2>
            <div className="row-flex">
                {
                    [...Array(3)].map((r, i) => (
                    <div key={`col-skill-${i}`} className="column-flex">
                        {
                            CommonUtil
                                .groupByColumn(skillsByLayer, i, 3)
                                .map(({id, skill, rating}) => (
                                    <div key={`skill-${id}`} className="skill-row">
                                        <div className="skill-cell">{skill}</div>
                                        <div className="skill-cell"><Rating total={5} rating={rating}/></div>
                                    </div>
                                ))
                        }
                    </div>
                ))
                }
            </div>
        </div>
    );
};
SkillsByLayer.propTypes = {
    title: PropTypes.string,
    data: PropTypes.object
};
const SkillsByLayerWithData = graphql(skillsByLayerQuery, {
    options: (props) => ({
        variables: {
            layer: props.layer
        }
    })
})(SkillsByLayer);

export default SkillsByLayerWithData;