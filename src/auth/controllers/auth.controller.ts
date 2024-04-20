import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { User } from '../../users/entities/user.entity';
import { ApiKeyGuard } from '../guards/api-key.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'), ApiKeyGuard)
  @Post('login')
  login(@Req() req: Request) {
    const user = req.user as User;
    return this.authService.generateJwt(user);
  }
}
