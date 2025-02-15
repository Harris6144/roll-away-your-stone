export interface User {
  uid: string;
  email: string;
}

export interface SignUpDto {
  email: string;
  password: string;
}

export interface SignInDto {
  email: string;
  password: string;
}
