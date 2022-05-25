export interface UserPayload {
  sub: bigint;
  email: string;
  name?: string;
  iat?: number;
}
