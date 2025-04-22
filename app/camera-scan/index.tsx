import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Circle } from "lucide-react-native";
import { Text } from "@/components/ui/text";

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();

  return (
    <VStack className="flex-1">
      {permission && permission.granted ? (
        <CameraView style={{ flex: 1 }} facing={"back"}>
          <Box className="flex-1 items-center justify-end p-10">
            <Button
              variant="link"
              className="w-16 h-16 rounded-full bg-white"
              onPress={() => console.log("tirar foto")}
            >
              <Icon as={Circle} size="xl" />
            </Button>
          </Box>
        </CameraView>
      ) : (
        <Box className="w-full h-full items-center justify-center gap-2">
          <Text>Precisamos da sua permissão para acessar a câmera</Text>
          <Button className="w-40" variant="solid" onPress={requestPermission}>
            <ButtonText>Permitir</ButtonText>
          </Button>
        </Box>
      )}
    </VStack>
  );
}
