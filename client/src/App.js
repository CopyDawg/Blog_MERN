import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import {ModalContextProvider} from './context/ModalContext'

function App() {
  return (
    <ModalContextProvider>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </ModalContextProvider>
  );
}

export default App;
