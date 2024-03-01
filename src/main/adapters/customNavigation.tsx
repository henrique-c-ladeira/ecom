import { createContext, useState } from 'react';
import { useHomeScreen } from '~/presentation/containers/useHomeScreen';
import { HomeScreen } from '~/ui/react-dom/containers/HomeScreen/HomeScreen';
import { Header } from '~/ui/react-dom/components/Header';
import { useContext } from 'react';
import { withBehaviour } from '../hocs/withBehaviour';
import { useProductListQuery } from '../factories/useProductListQuery';

const RouteContext = createContext<{
  currentRoute: string;
  setCurrentRoute: (value: string) => void;
} | null>(null);

const useNavigateToCartCommand = () => {
  const navigation = useContext(RouteContext);
  const action = () => navigation?.setCurrentRoute('Cart');
  return action;
};

const useMakeHomeScreen = () =>
  useHomeScreen({
    useProductListQuery,
  });

const MakeHomeScreen = withBehaviour({
  useBehaviour: useMakeHomeScreen,
  Component: HomeScreen,
});

export const Routes: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('');

  return (
    <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
      <Header />
      {!currentRoute && <MakeHomeScreen />}
      {currentRoute === 'Cart' && null}
    </RouteContext.Provider>
  );
};
