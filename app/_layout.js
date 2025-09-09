import { Stack } from "expo-router";

export default function RootLayout() {
  return (
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
    </Stack >)
    ;
}
