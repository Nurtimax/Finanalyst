import Routes from './routes';
import TelegramProvider from 'providers/TelegramProvider';

function App() {
  return (
    <TelegramProvider>
      <Routes />
    </TelegramProvider>
  );
}

export default App;
