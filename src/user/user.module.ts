import { EmployeeModule } from './../employee/employee.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    EmployeeModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
