import { PropertyFilter, SelectColor } from "@/lib/notion";

export interface FilterButton {
  id?: string;
  name: string;
  color?: SelectColor;
}

export type FilterState = Record<string, any>;

export type FilterSelector = { and: PropertyFilter[] };
