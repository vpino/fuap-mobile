const Stack = createNativeStackNavigator();
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import PersonalLoan2terms from "./screens/PersonalLoan2terms";
import HomeLoan4price from "./screens/HomeLoan4price";
import ApprovalHome from "./screens/ApprovalHome";
import HomeLoan5downpayment from "./screens/HomeLoan5downpayment";
import PersonalLoan3assets from "./screens/PersonalLoan3assets";
import Submissions from "./screens/Submissions";
import PersonalLoan1Monthlys from "./screens/PersonalLoan1Monthlys";
import HomePageEmpty from "./screens/HomePageEmpty";
import HomeLoan1Usage from "./screens/HomeLoan1Usage";
import HomeLoan2Type from "./screens/HomeLoan2Type";
import RejectionHome from "./screens/RejectionHome";
import Submissions1 from "./screens/Submissions1";
import Profile from "./screens/Profile";
import Menu from "./screens/Menu";
import HomeLoan3address from "./screens/HomeLoan3address";
import RejectionPersonal from "./screens/RejectionPersonal";
import Group from "./screens/Group";
import PersonalLoan4TC from "./screens/PersonalLoan4TC";
import HomeLoan8TCs from "./screens/HomeLoan8TCs";
import HomeLoan6monthlys from "./screens/HomeLoan6monthlys";
import ApplicationHome from "./screens/ApplicationHome";
import HomePageFilled from "./screens/HomePageFilled";
import ApprovalPersonal from "./screens/ApprovalPersonal";
import HomeLoan7assets from "./screens/HomeLoan7assets";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

MIcon
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="Signup"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="PersonalLoan2terms"
                component={PersonalLoan2terms}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeLoan4price"
                component={HomeLoan4price}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ApprovalHome"
                component={ApprovalHome}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeLoan5downpayment"
                component={HomeLoan5downpayment}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PersonalLoan3assets"
                component={PersonalLoan3assets}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Submissions"
                component={Submissions}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PersonalLoan1Monthlys"
                component={PersonalLoan1Monthlys}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePageEmpty"
                component={HomePageEmpty}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeLoan1Usage"
                component={HomeLoan1Usage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeLoan2Type"
                component={HomeLoan2Type}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RejectionHome"
                component={RejectionHome}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Submissions1"
                component={Submissions1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeLoan3address"
                component={HomeLoan3address}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RejectionPersonal"
                component={RejectionPersonal}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Group"
                component={Group}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PersonalLoan4TC"
                component={PersonalLoan4TC}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeLoan8TCs"
                component={HomeLoan8TCs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeLoan6monthlys"
                component={HomeLoan6monthlys}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ApplicationHome"
                component={ApplicationHome}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePageFilled"
                component={HomePageFilled}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ApprovalPersonal"
                component={ApprovalPersonal}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeLoan7assets"
                component={HomeLoan7assets}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
