import { Body, Controller, Post } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { UsersEntity } from './users.entity';

@Controller('auth')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @Post('reg')
  reg(@Body() regData: UsersEntity): Promise<UsersEntity> {
    return this.authorizationService.registration(regData);
  }

  @Post('log')
  log(@Body() loginData: UsersEntity): Promise<object> {
    return this.authorizationService.login(loginData);
  }
}
