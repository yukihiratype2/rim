// import loadable from '@loadable/component';
import { observer } from 'mobx-react-lite';
import {
  BrowserRouter as Router, Redirect, Route, Switch, useRouteMatch,
} from 'react-router-dom';
import { supaBaseAuthStore } from '../../../shared/service-provider/supabase';
import LoginForm from './login/LoginForm';
import SignUpForm from './sign-up/SignUpForm';

const LoginFormWithStore = observer(() => <LoginForm onLogin={supaBaseAuthStore.login} />);

const SignUpFormWithStore = observer(() => <SignUpForm onSignUp={supaBaseAuthStore.signup} />);

const AuthRouter = () => {
  const match = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route exact path={match.path}>
          <Redirect to={`${match.path}/login`} />
        </Route>
        <Route path={`${match.path}/login`}>
          <LoginFormWithStore />
        </Route>
        <Route path={`${match.path}/signup`}>
          <SignUpFormWithStore />
        </Route>
      </Switch>
    </Router>
  );
};

export default AuthRouter;
