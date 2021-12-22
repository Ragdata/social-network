import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'profiles' })
export class ProfilesEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  email?: string;

  @Column()
  phone?: string;

  @Column()
  dateOfBirth?: string;

  @Column()
  aboutMe?: string;

  @Column()
  mainPhoto?: string;

  @Column()
  userId?: string;
}