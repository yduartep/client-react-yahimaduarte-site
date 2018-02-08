import React from 'react';
import {graphql} from 'react-apollo';
import {projectsQuery} from '../../graphql/queries';
import ProjectPreview from './ProjectPreview';
import CommonUtil from '../../util/CommonUtil';
import PhraseAuthor from '../PhraseAuthor';

const Projects = ({data: {loading, error, projectsByLang}}) => {
    if (loading) {
        return <h1>Loading projects ... <img src="images/loading-large.gif" alt="Loading ..."/></h1>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div className="container">
            <h1>Projects</h1>
            <PhraseAuthor
                phrase="Life can be understood backwards but it must be lived forwards."
                author="Soren Kierkegaard"
            />
            <hr/>
            <div className="row-flex">
                {
                    [0, 1, 2].map((i) => (
                        <div key={`col-project-${i}`} className="column-flex">
                            {
                                CommonUtil.groupByColumn(projectsByLang, i, 3)
                                    .map(({id, title, description, tags, image, year}) => (
                                        <ProjectPreview
                                            key={id}
                                            imageUrl={image ? `images/projects/${image}` : 'images/projects/image_not_available.png'}
                                            title={title} description={description} tags={tags} year={year}/>
                                    ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const ProjectsWithData = graphql(projectsQuery, {
    options: (props) => ({
        variables: {
            language: props.language
        },
    })
})(Projects);

export default ProjectsWithData;