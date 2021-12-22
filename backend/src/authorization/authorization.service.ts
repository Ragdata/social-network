import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import genTokenPair from '../middleware/genTokenPair';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthorizationService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async registration(registerData: UsersEntity): Promise<UsersEntity> {
    const findDuplicateEmail = await this.usersRepository.find({
      where: { email: registerData.email },
    });

    if (findDuplicateEmail.length !== 0) {
      throw new BadRequestException({
        key: 'User with this email already exist',
      });
    }
    const hash = await bcrypt.hash(registerData.password, 5);
    const newUser = {
      id: uuidv4(),
      email: registerData.email,
      password: hash,
      isAdmin: false,
    };
    const createNewUser = await this.usersRepository.create(newUser);
    return this.usersRepository.save(createNewUser);
  }

  async login(loginData: UsersEntity): Promise<object> {
    const findRegisteredUser = await this.usersRepository.find({
      where: { email: loginData.email },
    });
    if (findRegisteredUser.length !== 0) {
      const validPassword = bcrypt.compareSync(
        loginData.password,
        findRegisteredUser[0].password,
      );
      if (validPassword) {
        const tokenPair = genTokenPair(
          findRegisteredUser[0].id,
          findRegisteredUser[0].isAdmin,
        );
        const { accessToken, refreshToken } = tokenPair;
        return {
          accessToken: accessToken,
          refreshToken: refreshToken,
          userId: findRegisteredUser[0].id,
        };
      } else {
        throw new BadRequestException({ key: 'Invalid password!' });
      }
    } else {
      throw new BadRequestException({ key: 'Invalid email!' });
    }
  }
}
