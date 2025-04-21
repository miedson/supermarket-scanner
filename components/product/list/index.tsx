import { VStack } from '@/components/ui/vstack';
import { ProductCartType } from '@/types/product.type';
import { ScrollView } from 'react-native';
import { ProductItem } from '../item';

type ProductListProps = {
    data: ProductCartType[]
}

export function ProductList({data}: ProductListProps) {
    return (
        <ScrollView className="flex-1">
            <VStack space="md">
                {data.map((product, index) => (<ProductItem key={index} product={product}/>))}
            </VStack>
        </ScrollView>
    )
}