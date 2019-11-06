import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Principal from './pages/Principal';
import Distribuidoras from './pages/Distribuidoras';
import Login from './pages/Login';

const Root = createStackNavigator({
    Login: {        
        screen: Login
    },
    Principal: {
      screen: Principal
    },
});

const container = createAppContainer(Root);
export default container; 