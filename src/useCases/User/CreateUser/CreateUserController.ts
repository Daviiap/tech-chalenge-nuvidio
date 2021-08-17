import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  private createUserUseCase: CreateUserUseCase;
  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const { data } = request.body;

    try {
      await this.createUserUseCase.exec(data);

      return response.status(201).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected Error." });
    }
  }
}
