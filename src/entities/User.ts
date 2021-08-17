import { DOB } from "./DOBI";
import { Id } from "./IdI";
import { Location } from "./LocationI";
import { Login } from "./LoginI";
import { Name } from "./NameI";
import { Picture } from "./PictureI";
import { Registered } from "./RegisteredI";

export class User {
  public readonly id: Id;
  public gender: string;
  public email: string;
  public phone: string;
  public cell: string;
  public nat: string;
  public login: Login;
  public name: Name;
  public location: Location;
  public dob: DOB;
  public registered: Registered;
  public picture: Picture;

  constructor(props: User) {
    this.id = props.id;
    this.gender = props.gender;
    this.email = props.email;
    this.phone = props.phone;
    this.cell = props.cell;
    this.nat = props.nat;
    this.login = props.login;
    this.name = props.name;
    this.location = props.location;
    this.dob = props.dob;
    this.registered = props.registered;
    this.picture = props.picture;
  }
}
