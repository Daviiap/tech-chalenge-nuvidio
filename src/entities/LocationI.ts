import { Coordinates } from "./CoordinatesI";
import { Timezone } from "./TimezoneI";

export interface Location {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}
