import {BadRequestException, Injectable} from '@nestjs/common';
import {UsersEntity} from "./users.entity";
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt';
import {InjectRepository} from "@nestjs/typeorm";

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
    const findDuplicatePhone = await this.usersRepository.find({
      where: { phone: registerData.phone },
    });
    if (findDuplicateEmail.length !== 0) {
      throw new BadRequestException({
        key: 'User with this email already exist',
      });
    }
    if (findDuplicatePhone.length !== 0) {
      throw new BadRequestException({
        key: 'User with this phone number already exist',
      });
    }
    const hash = await bcrypt.hash(registerData.password, 5);
    const newUser = {
      email: registerData.email,
      phone: registerData.phone,
      password: hash,
      dateOfBirth: '01082001',
      isAdmin: false
    }
    const createNewUser = await this.usersRepository.create(newUser)
    return this.usersRepository.save(createNewUser)

  }

  async login(loginData: UsersEntity): Promise<string> {
    const findRegisteredUser = await this.usersRepository.find({
      where: { email: loginData.email },
    });
    if (findRegisteredUser.length !== 0) {
      const validPassword = bcrypt.compareSync(
        loginData.password,
        findRegisteredUser[0].password,
      );
      if (validPassword) {

        return `${findRegisteredUser[0].id}` ;
      } else {
        throw new BadRequestException({ key: 'Invalid password!' });
      }
    } else {
      throw new BadRequestException({ key: 'Invalid email!' });
    }
  }


}
