import type { SeoProps } from "@app/types";

export const seo_lists: { [any: string]: SeoProps } = {
  home: {
    title: "HOME",
    description: "",
    image: "",
  },
  404: {
    title: "Page not found",
    description: "",
    image: "",
  },
};

export const getSeoList = (name: string) => {
  if (seo_lists[name]) {
    return seo_lists[name];
  } else {
    return {
      title: "",
      description: "",
      image: "",
    };
  }
};
