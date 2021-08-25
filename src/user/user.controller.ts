import { Body, Controller, Post } from '@nestjs/common';
import CreateUserDto from './create-user.dto';
import { UserService } from './user.service';
import ValidateUserDto from './validate-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post('validate')
    validateUser(@Body() user: ValidateUserDto){
        return this.userService.validate(user);
    }
    @Post('new')
    insertUser(@Body() user: CreateUserDto){
        return this.userService.insert(user);
    }

}
