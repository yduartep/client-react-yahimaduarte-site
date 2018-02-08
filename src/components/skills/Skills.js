import React, {Component} from "react";
import './Skills.css';
import 'font-awesome/css/font-awesome.min.css';
import SkillsByLayerWithData from "./SkillsByLayer";
import PhraseAuthor from '../PhraseAuthor';

class Skills extends Component {
    render() {
        return (
            <div className="container">
                <h1>Skills</h1>
                <PhraseAuthor
                    phrase="Follow your dreams and use your natural-born talents and skills to make this a better world for tomorrow."
                    author="Paul Watson"
                />
                <hr/>
                <SkillsByLayerWithData title="Frontend" layer="FRONTEND"/>
                <SkillsByLayerWithData title="Backend" layer="BACKEND"/>
            </div>
        );
    }
}

export default Skills;