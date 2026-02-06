import Frontend from './Frontend'
import Auth from './Auth'

const Controllers = {
    Frontend: Object.assign(Frontend, Frontend),
    Auth: Object.assign(Auth, Auth),
}

export default Controllers