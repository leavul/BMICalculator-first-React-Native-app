import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'BMI Calculator',
            headerTitleStyle: {
              fontFamily: 'Ubuntu Bold',
            }
          }}
        >
        </Stack.Screen>
      </Stack >
    </>
  );
}
