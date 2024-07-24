  export type oder_ItemType = {
    name:string;
    photo:string;
    price:number;
    quanity: number;
    _id:string;

  };
  export type OrderType = {
    name: string;
    address: string;
    city: number;
    country: string;
    state: number;
    pinCode: number;
    status:"Processing" | "Shpped" | "Delivered";
    subtotal: string;
    discount: string;
    shippingCharge: number;
    tax: number;
    OrderItems: OrderType[];
    _id:string;
  };    