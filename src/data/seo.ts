import t from "../i18n/cs.json";
import { children, men, women } from "./pricing";

const serviceNames = [...women.groups, ...men.groups, ...children.groups].flatMap(
  (group) => group.items.map((item) => item.name),
);

export function buildHairSalonJsonLd(siteUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: t.site.name,
    description: t.site.description,
    telephone: t.contact.phoneTel,
    ...(siteUrl ? { url: siteUrl, image: `${siteUrl}/og-image.jpg` } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hliník 34",
      addressLocality: "Bochoř",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.425772,
      longitude: 17.422879,
    },
    sameAs: [t.footer.instagramUrl, t.footer.facebookUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.pricing.eyebrow,
      itemListElement: serviceNames.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
  };
}
