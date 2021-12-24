import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfilesEntity } from './profiles.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(ProfilesEntity)
    private readonly userRepository: Repository<ProfilesEntity>,
  ) {}

  async createProfile(profileData: ProfilesEntity): Promise<ProfilesEntity> {
    const findDuplicateProfile = await this.userRepository.find({
      where: { userId: profileData.userId },
    });

    if (findDuplicateProfile.length !== 0) {
      throw new BadRequestException({
        key: 'This user profile already exists',
      });
    }
    const newProfile = {
      id: uuidv4(),
      name: profileData.name,
      surname: profileData.surname,
      gender: profileData.gender,
      dateOfBirth: profileData
    };
  }
}
