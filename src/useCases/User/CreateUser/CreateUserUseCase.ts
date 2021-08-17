import { User } from "@entities/User";
import { UsersRepository } from "@repositories/UsersRepository";
import { CreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  private repository: UsersRepository;
  constructor(repository: UsersRepository) {
    this.repository = repository;
  }

  async exec(data: CreateUserRequestDTO) {
    const userExists = await this.repository.find(data.id);

    if (userExists) {
      throw new Error("Usuário ja existe");
    }

    const user = new User(data);

    await this.repository.save(user);
  }
}
