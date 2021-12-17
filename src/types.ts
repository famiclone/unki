export type IdType = number;

export type DeckType = {
  id: IdType;
  name: string;
};

export type CardData = {
  id: IdType;
  deck: DeckType;
  content: string[];
  level: number;
};

export type Side = 0 | 1;
