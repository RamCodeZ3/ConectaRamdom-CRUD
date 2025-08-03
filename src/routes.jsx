import App from './App'
import UserInfo from './pages/userInfo/UserInfo'
import EditUser from './pages/EditUser'
import Layout from './common/Layout'

const routes = [
    {
        path:'/',
        element: <Layout/>,
        children: [
                {
        path: '/home',
        element: <App/>
    },
    {
        path: '/user/:id',
        element: <UserInfo/>
    },
    {
        path: '/editUser/:id',
        element: <EditUser/>
    }
        ]
    }
]

export default routes