import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStratergy } from "./local.stratergy";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: "SECRET",
    signOptions: {expiresIn: '60s'}
  })],
  providers: [AuthService, LocalStratergy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
