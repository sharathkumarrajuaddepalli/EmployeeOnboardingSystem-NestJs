import { RoleService } from './role.service';
import { Controller, Get } from '@nestjs/common';

@Controller('role')
export class RoleController {
    constructor( private readonly roleService : RoleService){}
    @Get()
    getRoles(){
        return this.roleService.getAllRoles();
    }
}
