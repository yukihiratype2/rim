import { observer } from 'mobx-react-lite';
import './App.css';
import { authStore } from './modules/auth/store';
import AppRouter from './router';
// import { supaBaseAuthStore } from './shared/service-provider/supabase';

const Router = observer(() => <AppRouter isLoggedIn={authStore.isLoggedIn} />);

function App() {
  return (
    <div data-testid="app" className="App">
      <Router />
    </div>
  );
}

export default App;
