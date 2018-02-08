import gql from 'graphql-tag';

export const aboutMeContentQuery = gql`
    query aboutMeContentQuery($language: String!){
        contentByMenuLang(menu: "ABOUT", language: $language) {id, title, content}
    }
`;

export const projectsQuery = gql`
    query projects($language: String!){
        projectsByLang(language: $language) {id, title, description, tags, image, year}
    }
`;

export const workExperiencesQuery = gql`
    query experiencesByTypeLang($language: String!){
        experiencesByTypeLang(profileType: "WORK", language: $language) {
            id, title, company, from, to, city, country, description, logo
        } 
    }
`;

export const educationExperiencesQuery = gql`
    query experiencesByTypeLang($language: String!){
        experiencesByTypeLang(profileType: "EDUCATION", language: $language) {
            id, title, subtitle, from, to, description, logo
        } 
    }
`;

export const certAwardExperiencesQuery = gql`
    query experiencesByTypeLang($language: String!){
        experiencesByTypeLang(profileType: "CERTIFICATIONS_AWARDS", language: $language) {
            id, title, subtitle
        } 
    }
`;

export const skillsByLayerQuery = gql`
    query skillsByLayer($layer: String!){
        skillsByLayer(layer: $layer) {
            id, skill, rating
        } 
    }
`;
