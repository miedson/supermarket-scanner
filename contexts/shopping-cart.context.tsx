import { ProductCartType } from "@/types/product.type";
import { ShoppingCartType } from "@/types/shopping-cart.type";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export const ShoppingCartContext = createContext<ShoppingCartType>(
  {} as ShoppingCartType,
);

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ProductCartType[]>([]);
  const [quantity, setQuantity] = useState(0);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    setQuantity(
      products.reduce((acc, current) => acc + (current.quantity ?? 0), 0),
    );
    setTotalCart(
      products.reduce(
        (acc, current) => acc + current.price * (current.quantity ?? 0),
        0,
      ),
    );
  }, [products]);

  const productExistsInCart = (id: number) =>
    products.filter((product) => product.id === id).length > 0;

  const add = (product: ProductCartType) => {
    if (productExistsInCart(product.id)) {
      const productsUpdated = products.map((item) => {
        return product.id === item.id
          ? { ...item, quantity: (item.quantity ?? 0) + 1 }
          : item;
      });
      setProducts(productsUpdated);
      return;
    }
    setProducts([...products, { ...product, quantity: 1 }]);
  };

  const remove = (product: ProductCartType) => {
    if (
      productExistsInCart(product.id) &&
      product.quantity &&
      product.quantity > 1
    ) {
      const productsUpdated = products.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity ?? 0) - 1 }
          : item,
      );
      setProducts(productsUpdated);
      return;
    }
    const productsFiltered = products.filter((item) => item.id !== product.id);
    setProducts(productsFiltered);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ products, add, remove, quantity, totalCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export const useShoppingCart = () => useContext(ShoppingCartContext);
