import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { HStack } from "@/components/ui/hstack"
import { Icon } from "@/components/ui/icon"
import { Image } from "@/components/ui/image"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import { toMoney } from "@/utils/to-money"
import { PlusCircle } from 'lucide-react-native'
import { useShoppingCart } from "@/contexts/shopping-cart.context"
import { ProductCartType } from "@/types/product.type"
import { Button } from "@/components/ui/button"

type ProductItemProps = {
    product: ProductCartType
};

export function ProductItem({ product }: ProductItemProps) {
    const { description, price } = product;
    const { add } = useShoppingCart()

    return(
        <Card className="p-3 rounded-lg w-full flex-row bg-primary-100">
                <HStack className="w-full justify-between">
                        <Image
                            source={{
                            uri: "https://gluestack.github.io/public-blog-video-assets/yoga.png",
                            }}
                            className="flex-1 h-[100px] rounded-md aspect-[263/240]"
                            alt="image"
                        />
                    <VStack className="flex-1 h-full px-4">
                        <Heading className="text-primary-900" size="md">
                            {description}
                        </Heading>
                        <Text className="text-primary-900" size="sm" bold>{toMoney(price ?? 0)}</Text>
                    </VStack>
                    <Button className="w-10 border" variant="link" onPress={() => add(product)}>
                        <Icon color="white" size="xl" as={PlusCircle} />
                    </Button>
                </HStack>
            </Card>
    )
}