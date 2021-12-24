import { Body, Controller, Post } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesEntity } from './profiles.entity';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post('createProfile')
  createProfile(@Body() profileData: ProfilesEntity): Promise<ProfilesEntity> {
    return this.profilesService.createProfile(profileData);
  }
}
