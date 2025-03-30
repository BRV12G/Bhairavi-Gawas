export interface Projects {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    github: string;
    webapp?: string;
    member?: {
      name: string;
      img: string;
      linkedin: string;
      github: string;
    }[];
  }
  