import React from 'react';
import {graphql} from 'react-apollo';
import {workExperiencesQuery} from '../../graphql/queries';
import WorkExperienceItem from './WorkExperienceItem';

const WorkExperiences = ({
    data: {
        loading,
        error,
        experiencesByTypeLang
    }
}) => {
    if (loading) {
        return <h1>Loading ...
            <img src="images/loading-large.gif" alt="Loading ..."/></h1>;
    }
    if (error) {
        return <p>Error loading Experiences data ...</p>;
    }
    return (
        <div className="container">
            <h2>Works</h2>
            <hr/> {experiencesByTypeLang.map((data, idx) => (
                <div key={`work-${data.id}`}>
                    <div className="row">
                        <WorkExperienceItem data={data}/>
                    </div>
                    {idx < experiencesByTypeLang.length - 1
                        ? (
                            <div className="row">
                                <hr className="sub-section"/>
                            </div>
                        )
                        : (<br/>)}
                </div>
            ))
}
        </div>
    );
};
WorkExperiences.propTypes = {
    data: {}
};
const WorkExperiencesWithData = graphql(workExperiencesQuery, {
    options: (props) => ({
        variables: {
            language: props.language
        }
    })
})(WorkExperiences);

export default WorkExperiencesWithData;