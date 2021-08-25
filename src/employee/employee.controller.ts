import { EmployeeService } from './employee.service';
import { Body, Controller, Get, Param, Put } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}
    @Get()
    getAll(){
        return this.employeeService.getAllEmployees();
    }
    @Get(':id')
    getById(@Param('id') employeeId: number){
        return this.employeeService.getEmployee(employeeId);
    }
    @Put(':id')
    saveEmployee(@Body() saveEmployee: any){

    }
}
