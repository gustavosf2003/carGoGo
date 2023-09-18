export interface VehicleType {
  id: number;
  name: string;
  vehicleType: string;
  image: string;
  vehicleLayout: string[];
  items: string[];
  location: {
    type: string;
  };
  ownerImage?: string;
  rating: number;
  reviews: number;
  price: number;
}
