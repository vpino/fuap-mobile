import React, {createContext, useContext, useRef, ReactNode} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';

interface NavigationContextType {
  setCurrentRoute: (routeName: string) => void;
  goBackToPreviousRoute: () => void;
}

const NavigationContextDefaultValue: NavigationContextType = {
  setCurrentRoute: () => {},
  goBackToPreviousRoute: () => {},
};

const NavigationContext = createContext<NavigationContextType>(
  NavigationContextDefaultValue,
);

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const previousRoute = useRef<string | null>(null);
  const currentRoute = useRef<string | null>(null);

  const setCurrentRoute = (routeName: string) => {
    previousRoute.current = currentRoute.current;
    currentRoute.current = routeName;
  };

  const goBackToPreviousRoute = () => {
    if (previousRoute.current) {
      navigation.navigate(previousRoute.current);
    } else {
      navigation.goBack();
    }
  };

  return (
    <NavigationContext.Provider
      value={{setCurrentRoute, goBackToPreviousRoute}}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => useContext(NavigationContext);
