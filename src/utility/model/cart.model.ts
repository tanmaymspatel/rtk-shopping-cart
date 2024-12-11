export interface ICartItem {
  id: number;
  title: string;
  minimumOrderQuantity: number;
  price: number;
  quantity: number;
  thumbnail: string;
  
}
export interface ICartSlice {
  cart: ICartItem[];
  isCartOpen:boolean
}
