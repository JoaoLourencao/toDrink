import Login from './pages/Login';
import Principal from './pages/Principal';
import Cadastro from './pages/Cadastro';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Routes = createAppContainer(
        createSwitchNavigator({
            Login,
            Cadastro,
            Principal,
}));

export default Routes;