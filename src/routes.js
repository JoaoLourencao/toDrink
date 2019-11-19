import Login from './pages/Login';
import Principal from './pages/Principal';
import Cadastro from './pages/Cadastro';
import Teste from './pages/Teste'
import Perfil from './pages/Perfil';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Routes = createAppContainer(
        createSwitchNavigator({
            Login,
            Cadastro,
            Principal,
            Teste,
            Perfil
}));

export default Routes;