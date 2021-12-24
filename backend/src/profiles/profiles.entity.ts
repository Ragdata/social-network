import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'profiles' })
export class ProfilesEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name?: string;

  @Column()
  surname?: string;

  @Column()
  phone?: string;

  @Column()
  dateOfBirth?: string;

  @Column()
  gender?: string;

  @Column()
  mainPhoto?: string;

  @Column()
  city?: string;

  @Column()
  userId?: string;
}
