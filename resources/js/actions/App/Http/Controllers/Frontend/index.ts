import HomeController from './HomeController'
import AboutController from './AboutController'
import ContactController from './ContactController'

const Frontend = {
    HomeController: Object.assign(HomeController, HomeController),
    AboutController: Object.assign(AboutController, AboutController),
    ContactController: Object.assign(ContactController, ContactController),
}

export default Frontend