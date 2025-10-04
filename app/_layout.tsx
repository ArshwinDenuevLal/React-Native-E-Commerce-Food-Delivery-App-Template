import { Redirect, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
    
      <Stack.Screen name="homescreen" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
