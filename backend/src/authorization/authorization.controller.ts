import {Controller, Get} from '@nestjs/common';
import {AuthorizationService} from "./authorization.service";

@Controller('auth')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}


  @Get('reg')
  reg(): string {
    return this.authorizationService.registration();
  }

  @Get('log')
  log(): string {
    return this.authorizationService.login();
  }
}
