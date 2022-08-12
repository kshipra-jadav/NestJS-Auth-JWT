import { Injectable } from '@nestjs/common';

export type User = {
  id: number,
  name: string,
  username: string,
  password: string
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: "Kshipra",
      username: "kdj",
      password: "kdj123"
    },
    {
      id: 2,
      name: "Aditya",
      username: "adpatil",
      password: "adpatil123"
    }
  ]
  
  async findOne(username: string) {
    return this.users.find(user => user.username === username)
  }
}
