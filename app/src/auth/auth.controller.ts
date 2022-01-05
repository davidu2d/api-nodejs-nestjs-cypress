import { Controller, Post, UseGuards, Request, Get, Headers } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @UseGuards(AuthGuard('basic'))
    @Post('token')
    async getAccessToken(@Headers('Authorization') basic: string) {
        const user = this.authService.decodeUsernameAndPassword(basic);
        console.log(user);
        return this.authService.getAccessToken(user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
