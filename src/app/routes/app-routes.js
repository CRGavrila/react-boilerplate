import {
    HomePage,
    HelloPage,
    SecretPage,
    Page404,
} from '../pages';

const AppRoutes = [
    {
        name: 'Home Page',
        type: '',
        route: {
            path: '/',
            exact: true,
            auth: false,
            component: HomePage,
        },
        tags: ['home', 'index'],
    },
    {
        name: 'Hello Page',
        type: '',
        route: {
            path: '/hello',
            exact: true,
            auth: false,
            component: HelloPage,
        },
        tags: ['hello'],
    },
    {
        name: 'Auth Page',
        type: '',
        route: {
            path: '/auth',
            exact: true,
            auth: true,
            component: SecretPage,
        },
        tags: ['Auth'],
    },
    {
        name: 'Page 404',
        type: '',
        tags: ['404', 'undefined'],
        route: {
            // path: '/',
            // exact: false,
            // auth: false,
            component: Page404,
        },
    }
];

export default AppRoutes;