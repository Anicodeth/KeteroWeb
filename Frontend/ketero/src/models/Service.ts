export interface CreateService {
  name: string;
  description: string;
  price: string;
  image: File;
}

export interface Service {
  _id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}
