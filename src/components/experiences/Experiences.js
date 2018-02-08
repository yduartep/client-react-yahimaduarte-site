import React, {Component} from 'react';
import './Experiences.css';
import WorkExperiencesWithData from './WorkExperiences';
import EducationExperiencesWithData from './EducationExperiences';
import CertificationAwardExperiencesWithData from './CertificationAwardExperiences';
import PhraseAuthor from '../PhraseAuthor';

class Experiences extends Component {
    render() {
        return (
            <div className="container">
                <h1>Experiences</h1>
                <PhraseAuthor
                    phrase="Be brave.Take risks. Nothing can substitute experience."
                    author="Paulo Coelho"
                />
                <div className="row">
                    <WorkExperiencesWithData language="EN"/>
                </div>
                <div className="row">
                    <EducationExperiencesWithData language="EN"/>
                </div>
                <div className="row">
                    <CertificationAwardExperiencesWithData language="EN"/>
                </div>
            </div>
        );
    }
}

export default Experiences;