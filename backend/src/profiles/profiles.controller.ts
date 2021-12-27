import { Body, Headers, Controller, Get, Post } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesEntity } from './profiles.entity';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post('createProfile')
  createProfile(@Body() profileData: ProfilesEntity): Promise<ProfilesEntity> {
    console.log(profileData.dateOfBirth);
    return this.profilesService.createProfile(profileData);
  }

  @Get('getProfile')
  getProfile(@Headers() id: any): Promise<any> {
    console.log(id.id);
    return this.profilesService.getProfile(id.id);
  }
}
