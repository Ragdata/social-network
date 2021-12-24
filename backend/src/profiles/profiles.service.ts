import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfilesEntity } from './profiles.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { UsersEntity } from '../authorization/users.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(ProfilesEntity)
    private readonly profileRepository: Repository<ProfilesEntity>,
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  async createProfile(profileData: ProfilesEntity): Promise<ProfilesEntity> {
    console.log(profileData.userId);
    const findDuplicateProfile = await this.userRepository.find({
      where: { userId: profileData.userId },
    });
    console.log(findDuplicateProfile);

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
      phone: profileData.phone,
      dateOfBirth: profileData.dateOfBirth,
      city: profileData.city,
      mainPhoto: profileData.mainPhoto,
      userId: profileData.userId,
    };
    const createNewUser = await this.profileRepository.create(newProfile);
    return this.profileRepository.save(createNewUser);
  }
}
