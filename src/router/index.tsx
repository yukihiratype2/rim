import loadable from '@loadable/component';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';

const AuthView = loadable(() => import('../views/auth/AuthView'));
const AppView = loadable(() => import('../views/app/AppView'));

type Props = {
  isLoggedIn: boolean
};

const AppRouter = ({ isLoggedIn }: Props) => (
  <Router>
    <Switch>
      <Route path="/auth">
        {isLoggedIn ? <Redirect to="/app" /> : <AuthView />}
      </Route>
      <Route path="/app">
        {isLoggedIn ? <AppView /> : <Redirect to="/auth" />}
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
