import { NOT_FOUND } from 'redux-first-router';

//constansts check current page

const constantsPages = {
    RTE_HOMEPAGE: 'HomePage',
    [NOT_FOUND]: 'NotFound',
    RTE_LOGIN: 'Login',
    RTE_MESSAGES: 'Messages',
    RTE_ABOUT_US: 'AboutUs',
}

export default (state = 'HomePage', action = {}) => constantsPages[action.type] || state;