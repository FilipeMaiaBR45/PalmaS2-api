import { IsEmail } from 'class-validator';
export class FindyUserByEmail {
  @IsEmail()
  email: string;
}
