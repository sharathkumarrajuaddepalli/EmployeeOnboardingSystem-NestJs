import { Injectable } from '@nestjs/common';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
    async getAllRoles(){
        return await Role.find();
    }
}
