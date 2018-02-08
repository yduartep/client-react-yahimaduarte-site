import React from 'react';
import {graphql} from 'react-apollo';
import {aboutMeContentQuery} from '../graphql/queries';

const About = ({data: {loading, error, contentByMenuLang}}) => {
    if (loading) {
        return <h1>Loading ... <img src="images/loading-large.gif" alt="Loading ..."/></h1>;
    }
    if (error) {
        return <p>Error loading About me data ...</p>;
    }
    return (
        <div className="container">
            <h1>About me</h1>
            <p className="lead">I'm a creative & determined Full Stack Engineer</p>
            <hr/>
            <div className="row">
                {
                    contentByMenuLang.map(({id, title, content}, index) => (
                        <div key={`submenu${id}`} className={`col-sm-${parseInt(12 / contentByMenuLang.length, 10)}`}>
                            <h2>{title}</h2>
                            <div dangerouslySetInnerHTML={{__html: content}}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const AboutWithData = graphql(aboutMeContentQuery, {
    options: (props) => ({
        variables: {
            language: props.language
        },
    })
})(About);

export default AboutWithData;