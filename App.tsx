import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text>CalendarScreen!</Text>
    </View>
  );
}

function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Text>LibraryScreen!</Text>
    </View>
  );
}

function MypageScreen() {
  return (
    <View style={styles.container}>
      <Text>MypageScreen!</Text>
    </View>
  );
}

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

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
