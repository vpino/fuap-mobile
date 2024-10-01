import React, {createContext, useContext, useRef, ReactNode} from 'react';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

interface NavigationContextType {
  setCurrentRoute: (routeName: string, params?: Record<string, any>) => void;
  goBackToPreviousRoute: () => void;
  getCurrentRoute: () => RouteParams | null;
  getPreviousRoute: () => RouteParams | null;
  getRouteStack: () => RouteParams[];
}

interface RouteParams {
  routeName: string;
  params?: Record<string, any>;
}

const NavigationContextDefaultValue: NavigationContextType = {
  setCurrentRoute: () => {},
  goBackToPreviousRoute: () => {},
  getCurrentRoute: () => null,
  getPreviousRoute: () => null,
  getRouteStack: () => [],
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
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const routeStack = useRef<RouteParams[]>([]);

  const setCurrentRoute = (routeName: string, params?: Record<string, any>) => {
    routeStack.current.push({routeName, params});
  };

  const goBackToPreviousRoute = () => {
    if (routeStack.current.length > 1) {
      routeStack.current.pop();
      const previousRoute = routeStack.current[routeStack.current.length - 1];
      navigation.navigate(previousRoute.routeName, previousRoute.params);
    } else {
      navigation.goBack();
    }
  };

  const getCurrentRoute = (): RouteParams | null => {
    return routeStack.current.length > 0
      ? routeStack.current[routeStack.current.length - 1]
      : null;
  };

  const getPreviousRoute = (): RouteParams | null => {
    return routeStack.current.length > 1
      ? routeStack.current[routeStack.current.length - 2]
      : null;
  };

  const getRouteStack = (): RouteParams[] => {
    return [...routeStack.current];
  };

  return (
    <NavigationContext.Provider
      value={{
        setCurrentRoute,
        goBackToPreviousRoute,
        getCurrentRoute,
        getPreviousRoute,
        getRouteStack,
      }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => useContext(NavigationContext);
