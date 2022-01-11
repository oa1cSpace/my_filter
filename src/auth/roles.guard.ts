import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { ROLES_KEY } from './roles-auth.decorator';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(
    private jwrService: JwtService,
    private reflector: Reflector
  ) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

    try {
      const requaredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      if (!requaredRoles) {
        return true;
      }
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' && !token) {
        throw new UnauthorizedException({ message: 'User unauthorized' });
      }

      const user = this.jwrService.verify(token);
      req.user = user;

      // Check if current user has appropriate role (to use some endpoint, f.e. -  to see all users if role 'admin').
      return user.roles.some(role => requaredRoles.includes(role.value));

    } catch (e) {
      throw new HttpException('Access forbidden', HttpStatus.FORBIDDEN);
    }

  }

}
