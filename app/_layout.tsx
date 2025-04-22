import { ButtonBasket } from "@/components/button-basket";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { ShoppingCartProvider } from "@/contexts/shopping-cart.context";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import "../global.css";

export default function RootLayout() {
  const router = useRouter();
  const [buttonBasketPressed, setButtonBasketPressed] = useState(false);
  const handleButtonBasketPress = () => {
    setButtonBasketPressed(!buttonBasketPressed);
    if (!buttonBasketPressed) {
      router.push("/shopping-cart");
      return;
    }
    router.back();
  };
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <GluestackUIProvider mode={"light" as "light" | "dark"}>
        <ThemeProvider value={DefaultTheme}>
          <ShoppingCartProvider>
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            />
            <ButtonBasket onPress={handleButtonBasketPress} />
          </ShoppingCartProvider>
        </ThemeProvider>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
