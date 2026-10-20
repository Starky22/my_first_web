import childrenData from "./pricing/children.json";
import menData from "./pricing/men.json";
import womenData from "./pricing/women.json";

export type HairLength = "full" | "short" | "medium" | "long";

export type LengthPrices = Record<HairLength, string>;

export type LengthHintId = "standard" | "curling";

export type PricingItem = {
  id: string;
  name: string;
  tooltip?: string;
  lengthHint?: LengthHintId;
  price?: string;
  prices?: LengthPrices;
};

export type PricingGroup = {
  id: string;
  title: string;
  items: PricingItem[];
};

export type PricingCategory = {
  groups: PricingGroup[];
};

export const lengthHints: Record<LengthHintId, LengthPrices> = {
  standard: {
    full: "(krátké / střední / dlouhé)",
    short: "(krátké)",
    medium: "(střední)",
    long: "(dlouhé)",
  },
  curling: {
    full: "(krátké - střední / dlouhé)",
    short: "(krátké)",
    medium: "(střední)",
    long: "(dlouhé)",
  },
};

export const women = womenData as PricingCategory;
export const men = menData as PricingCategory;
export const children = childrenData as PricingCategory;

export function getLengthHint(item: PricingItem) {
  return item.lengthHint ? lengthHints[item.lengthHint] : undefined;
}
