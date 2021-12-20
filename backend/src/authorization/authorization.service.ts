import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorizationService {
  registration(): string {
    return 'registration';
  }

  login(): string {
    return 'login';
  }
}
