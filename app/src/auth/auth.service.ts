import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
      private userService: UsersService,
      private jwtService: JwtService
    ){}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOneByUsername(username);
        if (user && bcrypt.compareSync(pass, user.password)) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }

    async getAccessToken(user: any) {
      const payload = { username: user.username, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }

    async decodeUsernameAndPassword(headerBasicEncode: string) {
      const userEncode = headerBasicEncode.split(" ");
      let userDecode = userEncode[1];
      let user = {}
      if (userDecode) {
        let temp = atob(userDecode).split(':');
        user = {username: temp[0], password: temp[1]}
      }
      return user;
    }
}
