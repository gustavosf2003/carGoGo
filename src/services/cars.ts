import type { VehicleType } from '@/types/vehicles';

const carsList: VehicleType[] = [
  {
    id: 0,
    name: 'Volvo XC 40',
    image: 'https://cdn2.rcstatic.com/images/car_images/web/volvo/xc40_lrg.jpg',
    vehicleType: 'Electric car',
    vehicleLayout: ['4 doors', '7 seats'],
    items: ['Automatic', 'Air conditioning', 'Unlimited KM', 'Insurance', 'Self driving'],
    location: {
      type: 'Car rental centre',
    },
    ownerImage: 'https://cdn2.rcstatic.com//sp/images/suppliers/102_logo_200.png',
    rating: 9.8,
    reviews: parseInt((Math.random() * 1000).toFixed(0), 10),
    price: 103.12,
  },
  {
    id: 1,
    name: 'Audi A3',
    image: 'https://cdn2.rcstatic.com/images/car_images/new_images/audi/a3_4door_lrg.jpg',
    vehicleType: 'Car',
    vehicleLayout: ['4 doors', '5 seats'],
    items: ['Manual', 'Air conditioning', 'Insurance'],
    location: {
      type: 'Car rental centre',
    },
    ownerImage: 'https://cdn2.rcstatic.com//sp/images/suppliers/207_logo_200.png',
    rating: 9.2,
    reviews: parseInt((Math.random() * 1000).toFixed(0), 10),
    price: 58.4,
  },
  {
    id: 2,
    name: 'Ford Ka',
    image: 'https://cdn2.rcstatic.com/images/car_images/web/ford/ka_lrg.jpg',
    vehicleType: 'Mini car',
    vehicleLayout: ['3 doors', '4 seats'],
    items: ['Manual', 'Air conditioning'],
    location: {
      type: 'Car rental centre',
    },
    ownerImage: 'https://cdn2.rcstatic.com//sp/images/suppliers/102_logo_200.png',
    rating: 8.4,
    reviews: parseInt((Math.random() * 1000).toFixed(0), 10),
    price: 33.9,
  },
  {
    id: 3,
    name: 'Mercedes Vito',
    image: 'https://cdn2.rcstatic.com/images/car_images/web/mercedes/vito_lrg.jpg',
    vehicleType: 'Van',
    vehicleLayout: ['4 doors', '9 seats'],
    items: ['Manual', 'Air conditioning', 'Insurance', 'Unlimited KM'],
    location: {
      type: 'Car rental centre',
    },
    ownerImage: 'https://cdn2.rcstatic.com//sp/images/suppliers/207_logo_200.png',
    rating: 9.7,
    reviews: parseInt((Math.random() * 1000).toFixed(0), 10),
    price: 139.52,
  },
  {
    id: 4,
    name: 'Tesla Model 3',
    image: 'https://cdn2.rcstatic.com/images/car_images/new_images/tesla/model_3_lrg.jpg',
    vehicleType: 'Electric car',
    vehicleLayout: ['4 doors', '5 seats'],
    items: [
      'Automatic',
      'Air conditioning',
      'Insurance',
      'Unlimited KM',
      'Self driving',
      'Electric',
    ],
    location: {
      type: 'Car rental centre',
    },
    ownerImage: 'https://cdn2.rcstatic.com//sp/images/suppliers/137_logo_200.png',
    rating: 9.9,
    reviews: parseInt((Math.random() * 1000).toFixed(0), 10),
    price: 107.37,
  },
  {
    id: 5,
    name: 'Volkswagen Golf',
    image: 'https://cdn2.rcstatic.com/images/car_images/web/volkswagen/golf_lrg.jpg',
    vehicleType: 'Car',
    vehicleLayout: ['4 doors', '5 seats'],
    items: ['Automatic', 'Air conditioning', 'Insurance', 'Unlimited KM'],
    location: {
      type: 'Car rental centre',
    },
    ownerImage: 'https://cdn2.rcstatic.com//sp/images/suppliers/102_logo_200.png',
    rating: 8.9,
    reviews: parseInt((Math.random() * 1000).toFixed(0), 10),
    price: 39.97,
  },
];

export async function findCar(body) {
  console.log('findCar: ', body);
  return body.username;
}

export async function getCars() {
  return carsList;
}

const findCarService = { findCar, getCars };

export default findCarService;
