import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import {ModalContextProvider, UserContextProvider} from './context'

function App() {
  return (
    <UserContextProvider>
      <ModalContextProvider>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </ModalContextProvider>
    </UserContextProvider>
  );
}

export default App;
