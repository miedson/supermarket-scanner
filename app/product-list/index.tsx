import { Header } from "@/components/header";
import { ProductList } from "@/components/product/list";
import { VStack } from "@/components/ui/vstack";
import { ProductCartType } from "@/types/product.type";
import { useEffect, useState } from "react";

const productsMock: ProductCartType[] = [
  { id: 1, description: "Produto_1", price: 5, brand: "Geral" },
  { id: 2, description: "Produto_2", price: 5, brand: "Geral" },
  { id: 3, description: "Produto_3", price: 5, brand: "Geral" },
  { id: 4, description: "Produto_4", price: 5, brand: "Geral" },
  { id: 5, description: "Produto_5", price: 5, brand: "Geral" },
  { id: 6, description: "Produto_6", price: 5, brand: "Geral" },
  { id: 7, description: "Produto_7", price: 5, brand: "Geral" },
];

export default function ProductListScreen() {
  const [value, setValue] = useState("");
  const [list, setList] = useState<ProductCartType[]>(productsMock);
  const [listFiltered, setListFiltered] =
    useState<ProductCartType[]>(productsMock);

  useEffect(() => {
    if (value && value !== "") {
      setListFiltered(
        list.filter((item) =>
          item.description.toLowerCase().includes(value.toLowerCase()),
        ),
      );
      return;
    }
    setListFiltered(list);
  }, [value]);

  return (
    <VStack space="md" className="flex-1 p-4">
      <Header value={value} onChange={(e) => setValue(e.nativeEvent.text)} />
      <ProductList data={listFiltered} />
    </VStack>
  );
}
