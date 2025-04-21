import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { useShoppingCart } from "@/contexts/shopping-cart.context"
import { ShoppingBasket } from 'lucide-react-native'
import { Box } from "../ui/box"
import { Text } from "../ui/text"
import { IButtonProps } from "@gluestack-ui/button/lib/types"

type ButtonBasketProps = IButtonProps;

export function ButtonBasket({...props}: ButtonBasketProps) {
    const { quantity } = useShoppingCart()
    return (
        <Button className="w-14 h-14 rounded-full bg-primary-500 absolute bottom-5 right-4 z-50 items-center justify-center" {...props}>
          {quantity && quantity > 0 ? (
            <Box className="w-10 h-7 rounded-xl bg-red-500 absolute -top-4 -right-2 items-center justify-center">
              <Text size="sm" bold>{String(quantity)}</Text>
            </Box>
          ) : null}
          <Icon color="white" size="xl" as={ShoppingBasket} />
        </Button>
      );
}