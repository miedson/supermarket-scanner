import { Button } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import { useRouter } from "expo-router";
import { ScanBarcode } from "lucide-react-native";
import { TextInputProps } from "react-native";

type HeaderProps = TextInputProps;

export function Header({ ...props }: HeaderProps) {
  const router = useRouter();
  const handleNewShoppingList = () => router.push("/camera-scan");
  return (
    <HStack space="sm" className="justify-between">
      <FormControl className="flex-1">
        <Input variant="outline" size="sm">
          <InputField
            type="text"
            placeholder="O que você procura?"
            {...props}
          />
        </Input>
      </FormControl>
      <Button
        className="flex-2"
        size="sm"
        variant="link"
        action="primary"
        onPress={handleNewShoppingList}
      >
        <Icon as={ScanBarcode} size="xl" />
      </Button>
    </HStack>
  );
}
