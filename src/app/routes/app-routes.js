import { HomePage, Page404 } from '../pages';

const AppRoutes = [
    {
        name: 'Home Page',
        type: '',
        route: {
            path: '/',
            exact: false,
            auth: false,
            component: HomePage,
        },
        tags: ['home', 'index'],
    },
    {
        name: 'Page 404',
        type: '',
        tags: ['404', 'undefined'],
        route: {
            path: '/',
            exact: false,
            auth: false,
            component: Page404,
        },
    }
];

export default AppRoutes;