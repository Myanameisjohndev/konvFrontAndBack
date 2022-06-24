import { ContextProvider } from './Context';
import RoutesAplication from './routes';

function App() {
  return (
    <ContextProvider>
      <RoutesAplication/>
    </ContextProvider>
  );
}

export default App;
