import { GetDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

import { FilterButton } from "@/lib";

import { PROPERTY_TYPE } from "../constants";

interface PropOption {
  propName: string;
  propType: keyof typeof PROPERTY_TYPE;
}

export function getRetrievePropValues(
  { properties }: GetDatabaseResponse,
  { propName, propType }: PropOption
): FilterButton[] | null {
  if (!(propName in properties)) return null;

  const prop = properties[propName] as Record<string, any>;

  if (propType in prop) {
    return prop[propType].options;
  }

  return null;
}
