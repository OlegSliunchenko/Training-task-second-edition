export interface ObjectType {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  address: {
    country: string;
    city: string;
    district: string;
    street: string;
    house: number;
  };
}
