
export interface GroundingLink {
  title?: string;
  uri: string;
}

export interface SchoolData {
  name: string;
  tagline: string;
  about: string;
  mission: string;
  vision: string;
  facilities: string[];
  contact: {
    address: string;
    phone: string;
    email: string;
    location: string;
  };
  academics: string[];
  groundingSources: GroundingLink[];
}

export interface AppState {
  loading: boolean;
  error: string | null;
  data: SchoolData | null;
}
