export type LeadLinkIndustryObjType = {
  id: number;
  name: string;
  image: StorageManager;
  other_status: number;
};

export type LeadLinkIconType = {
  id: number;
  layout_id: null | number;
  image: string;
  layout1_image: string;
  layout2_image: string;
  layout3_image: string;
  category: string;
};

export type LeadLinkType = {
  id: number;
  title: string;
  url: string;
  icon: LeadLinkIconType;
};

export type LeadContactType = {
  id: number;
  name: string;
  email: string;
  phone: number;
  job_title: string;
  industry: string;
  country: string;
  city: string;
  links: LeadLinkType[] | [];
  company: string;
  industry_obj: LeadLinkIndustryObjType;
  cover: string;
  profile: string;
};

export type LeadAlphabetType = {
  first_letter: string;
  contacts: LeadContactType[];
};

export type CountryType = {
  id: number;
  name: string;
};

export type IndustryType = {
  id: number;
  name: string;
  image: string;
  other_status: number;
};
