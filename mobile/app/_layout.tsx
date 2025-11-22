import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {Platform} from "react-native";
import "react-native-reanimated";
import {WebView} from "react-native-webview";

import {useColorScheme} from "@/hooks/use-color-scheme";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Android 에뮬레이터에서는 호스트 머신의 localhost를 10.0.2.2로 접근해야 함
  const getWebUrl = () => {
    if (process.env.EXPO_PUBLIC_WEB_URL) {
      return process.env.EXPO_PUBLIC_WEB_URL;
    }
    // Android 에뮬레이터용 주소 매핑
    const host = Platform.OS === "android" ? "10.0.2.2" : "localhost";
    return `http://${host}:5173`;
  };

  const uri = getWebUrl();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <WebView source={{uri}} />
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
