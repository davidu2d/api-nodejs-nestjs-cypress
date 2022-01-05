import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { BasicStrategy } from './strategies/basic.strategy';

@Module({
  imports: [
    UsersModule, 
    PassportModule,
    ConfigModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '300s'}
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, BasicStrategy],
  exports: [JwtModule, AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
