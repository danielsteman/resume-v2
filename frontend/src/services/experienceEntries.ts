import axios from 'axios';

const getAllExperienceEntries = () => axios.get('mocks/projects.json');

export default getAllExperienceEntries;
