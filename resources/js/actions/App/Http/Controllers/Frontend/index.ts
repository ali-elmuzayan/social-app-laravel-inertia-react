import HomeController from './HomeController'
import AboutController from './AboutController'
import ContactController from './ContactController'
import DashboardController from './DashboardController'

const Frontend = {
    HomeController: Object.assign(HomeController, HomeController),
    AboutController: Object.assign(AboutController, AboutController),
    ContactController: Object.assign(ContactController, ContactController),
    DashboardController: Object.assign(DashboardController, DashboardController),
}

export default Frontend