import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./pages/HomePage";
import CalendarScreen from "./pages/CalendarPage";
import LibraryScreen from "./pages/LibraryPage";
import MypageScreen from "./pages/MyPage";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarActiveTintColor: "black" }}
        backBehavior="history"
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="CALENDAR"
          component={CalendarScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="LIBRARY"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="dumbbell" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="MY PAGE"
          component={MypageScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
