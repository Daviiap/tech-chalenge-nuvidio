import { DOB } from "@entities/DOBI";
import { Id } from "@entities/IdI";
import { Location } from "@entities/LocationI";
import { Login } from "@entities/LoginI";
import { Name } from "@entities/NameI";
import { Picture } from "@entities/PictureI";
import { Registered } from "@entities/RegisteredI";

export interface CreateUserRequestDTO {
  id: Id;
  gender: string;
  email: string;
  phone: string;
  cell: string;
  nat: string;
  login: Login;
  name: Name;
  location: Location;
  dob: DOB;
  registered: Registered;
  picture: Picture;
}
