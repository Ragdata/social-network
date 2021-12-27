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
    // const findDuplicateProfile = await this.userRepository.find({
    //   where: { id: profileData.userId },
    // });
    // if (findDuplicateProfile.length !== 0) {
    //   throw new BadRequestException({
    //     key: 'This user profile already exists',
    //   });
    // }
    const newProfile = {
      id: uuidv4(),
      name: profileData.name,
      surname: profileData.surname,
      gender: profileData.gender,
      phone: profileData.phone,
      dateOfBirth: 'foo',
      city: profileData.city,
      mainPhoto: profileData.mainPhoto,
      userId: profileData.userId,
    };
    const createNewProfile = await this.profileRepository.create(newProfile);
    return this.profileRepository.save(createNewProfile);
  }

  async getProfile(id: string): Promise<any> {
    console.log(1111111);
    const findOneProfile = await this.profileRepository.findOne({
      where: { userId: id },
    });
    console.log(findOneProfile);
    return findOneProfile;
  }
}
