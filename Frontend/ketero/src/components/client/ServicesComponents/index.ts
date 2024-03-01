import {
  Burger,
  BeautySalon,
  ServiceImage,
  Restaurant,
  CeoOne,
  CeoTwo,
} from "../../../assets";

export interface Categories {
  categoryName: string;
  categoryPicture: any;
}

export interface FormData {
  searchValue: string;
}

export interface toggleData {
  id: string;
  name: string;
}

export interface Service {
  serviceName: string;
  companyName: string;
  serviceImage: any;
  serviceImageAlt: string;
  serviceDetail: string;
  companyAgentName: string;
  companyContact: string;
  servicePrice: number;
}

export const categoryData: Categories[] = [
  {
    categoryName: "Beauty Salon",
    categoryPicture: BeautySalon,
  },
  {
    categoryName: "Dinner Reservation",
    categoryPicture: Restaurant,
  },
];

export const toggles: toggleData[] = [
  {
    id: "1",
    name: "Services",
  },
  {
    id: "2",
    name: "Categories",
  },
  {
    id: "3",
    name: "Companies",
  },
];

export const serviceData: Service[] = [
  {
    serviceName: "Men Hair Cut",
    companyName: "Barber Shop",
    serviceImage: ServiceImage,
    serviceImageAlt: "A Descriptive Image About The Service",
    serviceDetail:
      "Tailored haircuts, offer precise beard grooming, and provide specialized services like soothing scalp treatments and invigorating hot towel shaves.",
    companyAgentName: "Solomon Hailu",
    companyContact: "+251 911 556 9887",
    servicePrice: 25,
  },
  {
    serviceName: "Fast Food",
    companyName: "In Joy!",
    serviceImage: Burger,
    serviceImageAlt: "Service 2 Image",
    serviceDetail:
      "Smooth, Moist and Teasty Flavour of a grilled beef burger is waiting for you",
    companyAgentName: "Agent B",
    companyContact: "+251 911 556 9887",
    servicePrice: 5,
  },
];

export interface Companies {
  companyImage: any;
  companyName: string;
  companyAgentName: string;
  companyPhone: string;
  companyAddress: String;
}

export const companyData: Companies[] = [
  {
    companyImage: CeoOne,
    companyName: "Barber Shop",
    companyAgentName: "Mezgebu Abate",
    companyPhone: "+251 911 8954 19",
    companyAddress: "Bole Edna Mall",
  },
  {
    companyImage: CeoTwo,
    companyName: "Dinner Restaurant",
    companyAgentName: "Alemitu Asnake",
    companyPhone: "+251 911 8954 19",
    companyAddress: "Arada Pissa",
  },
];
