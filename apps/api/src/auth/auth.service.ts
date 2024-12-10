import { ConflictException, Injectable } from '@nestjs/common';
import { create } from 'domain';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  registerUser(createUserDto: CreateUserDto) {
    const user = this.userService.findByEmail(createUserDto.email);
    if (user) throw new ConflictException('Use exists already!');
    return this.userService.create(createUserDto);
  }
}
