export interface HouseGeo {
  type: string;
  features: Feature[];
}

export interface Feature {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  id: string;
  listing_url: string;
  scrape_id: string;
  last_scraped: Date;
  name: string;
  summary: string;
  space: null;
  description: string;
  experiences_offered: string;
  neighborhood_overview: null;
  notes: null;
  transit: null;
  access: string;
  interaction: string;
  house_rules: string;
  thumbnail_url: string;
  medium_url: string;
  picture_url: null;
  xl_picture_url: string;
  host_id: string;
  host_url: string;
  host_name: string;
  host_since: Date;
  host_location: string;
  host_about: null;
  host_response_time: string;
  host_response_rate: number;
  host_acceptance_rate: string;
  host_thumbnail_url: string;
  host_picture_url: string;
  host_neighbourhood: null;
  host_listings_count: number;
  host_total_listings_count: number;
  host_verifications: string[];
  street: string;
  neighbourhood: null;
  neighbourhood_cleansed: string;
  neighbourhood_group_cleansed: null;
  city: string;
  state: string;
  zipcode: string;
  market: string;
  smart_location: string;
  country_code: string;
  country: string;
  latitude: string;
  longitude: string;
  property_type: string;
  room_type: string;
  accommodates: number;
  bathrooms: number;
  bedrooms: number;
  beds: number;
  bed_type: string;
  amenities: string[];
  square_feet: null;
  price: number;
  weekly_price: null;
  monthly_price: null;
  security_deposit: null;
  cleaning_fee: null;
  guests_included: number;
  extra_people: number;
  minimum_nights: number;
  maximum_nights: number;
  calendar_updated: string;
  has_availability: null;
  availability_30: number;
  availability_60: number;
  availability_90: number;
  availability_365: number;
  calendar_last_scraped: Date;
  number_of_reviews: number;
  first_review: Date;
  last_review: Date;
  review_scores_rating: number;
  review_scores_accuracy: number;
  review_scores_cleanliness: number;
  review_scores_checkin: number;
  review_scores_communication: number;
  review_scores_location: number;
  review_scores_value: number;
  license: null;
  jurisdiction_names: null;
  cancellation_policy: string;
  calculated_host_listings_count: number;
  reviews_per_month: number;
  features: string[];
}
