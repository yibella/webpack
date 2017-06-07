import App from '../App'
import Home from "../page/home";
import Item from "../page/item";
import Score from "../page/score";

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: Home
    }, {
        path: '/item',
        component: Item
    }, {
        path: '/score',
        component: Score
    }]
}]