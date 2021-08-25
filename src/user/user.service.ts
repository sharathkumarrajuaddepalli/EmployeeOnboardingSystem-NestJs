import { Employee } from 'src/employee/employee.entity';
import { EmployeeService } from './../employee/employee.service';
import { Injectable } from '@nestjs/common';
import createUserDto from './create-user.dto';
import { User } from './user.entity';
import validateUserDto from './validate-user.dto';

@Injectable()
export class UserService {
    constructor(
    private readonly employeeService: EmployeeService){}
    async insert(user: createUserDto) : Promise<User>{
        const userEntity: User = User.create();
        const {emailId,password,roleId,name} = user;
        userEntity.emailId = emailId;
        userEntity.password = password;
        userEntity.roleId = roleId;
        userEntity.name = name;
        const employee: Employee = Employee.create();
        employee.emailId = user.emailId;
        employee.password = user.password;
        employee.roleId = user.roleId;
        employee.employeeName = user.name;
        await Employee.save(employee);
        userEntity.employee = employee; 
        await User.save(userEntity);
        return userEntity;
    }
    async validate(user: validateUserDto) {
        const realUser : User = await User.findOne({where:{emailId: user.emailId}});
        if(realUser.password === user.password)
         return true;
        return false;
    }
}
