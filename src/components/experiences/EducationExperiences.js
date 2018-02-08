import React from 'react';
import {graphql} from 'react-apollo';
import {educationExperiencesQuery} from '../../graphql/queries';
import EducationExperienceItem from './EducationExperienceItem';

const EducationExperiences = ({
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
        return <p>Error loading Educations data ...</p>;
    }
    return (
        <div className="container">
            <h2>Education</h2>
            <hr/> {experiencesByTypeLang.map((data, idx) => (
                <div key={`education-${data.id}`}>
                    <div className="row">
                        <EducationExperienceItem data={data}/>
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
EducationExperiences.propTypes = {
    data: {}
};
const EducationExperiencesWithData = graphql(educationExperiencesQuery, {
    options: (props) => ({
        variables: {
            language: props.language
        }
    })
})(EducationExperiences);

export default EducationExperiencesWithData;