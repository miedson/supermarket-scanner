import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { ShoppingListType } from "@/types/shopping-list.type";
import { toMoney } from "@/utils/to-money";
import { useRouter } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { Pressable } from "react-native";

type MonthlyShoppingItemProps = {
  data: ShoppingListType;
};

export function MonthlyShoppingItem({ data }: MonthlyShoppingItemProps) {
  const router = useRouter();
  const handleOpenList = () => {
    router.push("/product-list");
  };
  const { title, total } = data;
  return (
    <Pressable onPress={handleOpenList}>
      <Card className="p-3 rounded-lg w-full flex-row bg-primary-100">
        <HStack className="w-full justify-between items-center">
          <VStack className="flex-1 h-full px-4">
            <Heading className="text-primary-900" size="md">
              {title}
            </Heading>
            <Text className="text-primary-900" size="sm" bold>
              {toMoney(total)}
            </Text>
          </VStack>
          <Icon as={ChevronRight} size={"xl"} color="white" />
        </HStack>
      </Card>
    </Pressable>
  );
}
