import Frontend from './Frontend'
import PostController from './PostController'
import Auth from './Auth'

const Controllers = {
    Frontend: Object.assign(Frontend, Frontend),
    PostController: Object.assign(PostController, PostController),
    Auth: Object.assign(Auth, Auth),
}

export default Controllers