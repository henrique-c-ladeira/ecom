import { NextUIProvider } from '@nextui-org/react';
import { Routes } from './adapters/customNavigation';

function App() {
  return (
    <NextUIProvider>
      <Routes />
    </NextUIProvider>
  );
}

export default App;
