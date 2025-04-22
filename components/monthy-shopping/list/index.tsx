import { VStack } from "@/components/ui/vstack";
import { ScrollView } from "react-native";
import { MonthlyShoppingItem } from "../item";
import { ShoppingListType } from "@/types/shopping-list.type";

type MonthlyShoppingListProps = {
  data: ShoppingListType[];
};

export function MonthlyShoppingList({ data }: MonthlyShoppingListProps) {
  return (
    <ScrollView className="flex-1">
      <VStack space="md">
        {data.map((item, index) => (
          <MonthlyShoppingItem key={index} data={item} />
        ))}
      </VStack>
    </ScrollView>
  );
}
