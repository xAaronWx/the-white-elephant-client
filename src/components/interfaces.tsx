export interface IUserAddress {
  id: number;
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface IGifts {
  id: number;
  itemType: string;
  name: string;
  weight: string;
  description: string;
  giftImage: string;
}
