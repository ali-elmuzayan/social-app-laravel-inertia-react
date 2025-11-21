import RegisteredUserController from './RegisteredUserController'
import AuthenticateSessionController from './AuthenticateSessionController'

const Auth = {
    RegisteredUserController: Object.assign(RegisteredUserController, RegisteredUserController),
    AuthenticateSessionController: Object.assign(AuthenticateSessionController, AuthenticateSessionController),
}

export default Auth