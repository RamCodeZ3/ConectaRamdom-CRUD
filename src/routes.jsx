import App from './App'
import UserInfo from './pages/UserInfo'

const routes = [
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/user/:id',
        element: <UserInfo/>
    }
]

export default routes