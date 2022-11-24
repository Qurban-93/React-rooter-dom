import './App.css';
import { UserContextProvider } from './context/userContext';
import Routes from './Routers';


function App() {
  return (
    <div>
      <UserContextProvider>
      < Routes />
      </UserContextProvider>
    </div>
  );
}

export default App;
