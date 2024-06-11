export interface ExperienceProps {
  source: SourceProps[];
}

interface ItemsArrayProps {
  "1": string;
  "2"?: string;
  "3"?: string;
  "4"?: string;
  "5"?: string;
}

export interface SourceProps {
  title: string;
  description: string;
  company: string;
  image: ItemsArrayProps;
  tecnologies: string;
  category: ItemsArrayProps;
  url: string;
}
