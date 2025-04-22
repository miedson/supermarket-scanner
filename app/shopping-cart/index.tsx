import { ItemCart } from "@/components/shopping-cart/item-cart";
import { VStack } from "@/components/ui/vstack";
import { useShoppingCart } from "@/contexts/shopping-cart.context";
import { Text } from "@/components/ui/text";
import { toMoney } from "@/utils/to-money";

export default function ShoppingCartScreen() {
  const { products, add, remove, totalCart } = useShoppingCart();
  return (
    <VStack className="flex-1 items-start p-4 gap-4">
      {totalCart ? (
        <Text bold className="text-blue-800">
          Total: {toMoney(totalCart)}
        </Text>
      ) : null}
      <VStack className="w-full h-full">
        {products.length ? (
          products.map((product, index) => (
            <ItemCart
              key={index}
              product={product}
              handlePlus={() => add(product)}
              handleMinus={() => remove(product)}
            />
          ))
        ) : (
          <Text bold className="text-center">
            Vazio
          </Text>
        )}
      </VStack>
    </VStack>
  );
}
