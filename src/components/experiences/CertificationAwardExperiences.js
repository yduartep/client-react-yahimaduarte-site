import React from 'react';
import {graphql} from 'react-apollo';
import {certAwardExperiencesQuery} from '../../graphql/queries';

const CertificationAwardExperiences = ({data: {loading, error, experiencesByTypeLang}}) => {
    if (loading) {
        return <h1>Loading ... <img src="images/loading-large.gif" alt="Loading ..."/></h1>;
    }
    if (error) {
        return <p>Error loading Educations data ...</p>;
    }
    return (
        <div className="container">
            <h2>Certification & Awards</h2>
            <hr/>
            {
                experiencesByTypeLang.map(({id, title, subtitle}) => (
                    <h4 key={`cert-${id}`}>{title} - {subtitle}</h4>
                ))
            }
            <br/>
        </div>
    );
};

const CertificationAwardExperiencesWithData = graphql(certAwardExperiencesQuery, {
    options: (props) => ({
        variables: {
            language: props.language
        },
    })
})(CertificationAwardExperiences);

export default CertificationAwardExperiencesWithData;