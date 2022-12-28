export interface User {
    name: string,
    email: string,
    password: string
  }

export interface NewUser {
  name: string,
  email: string,
  password: string,
  isAdm: boolean
}