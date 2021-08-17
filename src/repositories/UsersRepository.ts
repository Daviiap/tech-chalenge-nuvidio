import { Id } from "@entities/IdI";
import { User } from "@entities/User";

export interface UsersRepository {
  find(id: Id): Promise<User>;
  save(user: User): Promise<void>;
  update(id: User): Promise<User>;
}
