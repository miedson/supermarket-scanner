import { Header } from "@/components/header"
import { MonthlyShoppingList } from "@/components/monthy-shopping/list"
import { VStack } from "@/components/ui/vstack"
import { ShoppingListType } from "@/types/shopping-list.type";
import { useEffect, useState } from "react"

const listMock: ShoppingListType[] = [
    {title: 'Compra 20/04/2025', total: 300 },
    {title: 'Compra 21/04/2025', total: 200 }
];

export default function Home() {
    const [ value, setValue ] = useState('')
    const [ list, setList ] = useState<ShoppingListType[]>(listMock);
    const [ listFiltered, setListFiltered ] = useState<ShoppingListType[]>(listMock);

    useEffect(() => {
        if(value && value !== '') {
            setListFiltered(list.filter(item => item.title.toLowerCase().includes(value.toLowerCase()) || 
            String(item.total).toLowerCase().includes(value.toLowerCase())));
            return;
        }
        setListFiltered(list)
    }, [value]);

    return(
        <VStack space="md" className="flex-1 p-4">
            <Header value={value} onChange={(e) => setValue(e.nativeEvent.text)}/>
            <MonthlyShoppingList data={listFiltered}/>
        </VStack>
    )
}