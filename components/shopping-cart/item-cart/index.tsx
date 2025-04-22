import { Button } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { ProductCartType } from "@/types/product.type";
import { toMoney } from "@/utils/to-money";
import { Minus, Plus } from "lucide-react-native";

type ItemCartProps = {
  product: ProductCartType;
  handlePlus: () => void;
  handleMinus: () => void;
};

export function ItemCart({ product, handlePlus, handleMinus }: ItemCartProps) {
  const { description, price, quantity } = product;
  return (
    <HStack className="w-full items-center justify-center p-2 border-b border-outline-100">
      <VStack className="flex-1">
        <Text bold size="md">
          {description}
        </Text>
        <Text size="sm">{toMoney(price ?? 0)}</Text>
      </VStack>
      <HStack className="flex-2 px-2 gap-1">
        <Button variant="link" onPress={handleMinus}>
          <Icon as={Minus} size="xl" />
        </Button>
        <Input variant="outline" size="sm" className="w-12">
          <InputField
            type="text"
            value={String(quantity)}
            size="sm"
            className="text-center"
          />
        </Input>
        <Button variant="link" onPress={handlePlus}>
          <Icon as={Plus} size="xl" />
        </Button>
      </HStack>
    </HStack>
  );
}
