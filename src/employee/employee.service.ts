import { Address } from './../address/address.entity';
import { Injectable } from '@nestjs/common';
import CreateUserDto from 'src/user/create-user.dto';
import { Employee } from './employee.entity';
import SaveEmployeeDto from './save-employee.dto';

@Injectable()
export class EmployeeService {
    async getEmployee(employeeId: number) : Promise<Employee>{
        const employee: Employee = await Employee.findOne({where: {employeeId : employeeId}, relations :['addressList']});
        return employee;
    }
    async getAllEmployees(): Promise<Employee[]>{
        return await Employee.find();
    }
    insertEmployee(user: CreateUserDto): Promise<Employee> {
        const employee: Employee = Employee.create();
        employee.emailId = user.emailId;
        employee.password = user.password;
        employee.roleId = user.roleId;
        employee.employeeName = user.name;
        return Employee.save(employee);
        
    }

    async saveEmployeeDetails(id:number,saveEmployeeDto : SaveEmployeeDto){
        const realdto = await Employee.findOneOrFail(id);
        if(!realdto.employeeId){
            console.error("Employee with this id doesn't exist");
        }
        realdto.employeeName = saveEmployeeDto.employeeName;
        realdto.phoneNumber = saveEmployeeDto.phoneNumber;
        realdto.emailId = saveEmployeeDto.emailId;
        realdto.bloodGroup = saveEmployeeDto.bloodGroup;
        realdto.aadharNumber = saveEmployeeDto.aadharNumber;
        realdto.dob = saveEmployeeDto.dob;
        realdto.gender = saveEmployeeDto.gender;
        realdto.sslcScore = saveEmployeeDto.sslcScore;
        realdto.hscScore = saveEmployeeDto.hscScore;
        realdto.ugScore = saveEmployeeDto.ugScore;
        realdto.fatherName = saveEmployeeDto.fatherName;
        realdto.motherName = saveEmployeeDto.motherName;
        realdto.emergencyContactName = saveEmployeeDto.emergencyContactName;
        realdto.emergencyContactNumber = saveEmployeeDto.emergencyContactNumber;
        realdto.emergencyContactRelation = saveEmployeeDto.emergencyContactRelation;
        const presentAddress = new Address();
        const permanentAddress = new Address();
        for(let item of saveEmployeeDto.addressList){
            if(item.type === "present"){
                presentAddress.area = item.area;
                presentAddress.city = item.city;
                presentAddress.country = item.country;
                presentAddress.flatName = item.flatName;
                presentAddress.mapCoordinates = item.mapCoordinates;
                presentAddress.pincode = item.pincode;
                presentAddress.state = item.state;
                presentAddress.street = item.street;
                presentAddress.type = item.type;
            }
            else{
                permanentAddress.area = item.area;
                permanentAddress.city = item.city;
                permanentAddress.country = item.country;
                permanentAddress.flatName = item.flatName;
                permanentAddress.mapCoordinates = item.mapCoordinates;
                permanentAddress.pincode = item.pincode;
                permanentAddress.state = item.state;
                permanentAddress.street = item.street;
                permanentAddress.type = item.type;
            }
        }
        await Address.save(presentAddress);
        await Address.save(permanentAddress);
        realdto.addressList=[presentAddress,permanentAddress];
        return await Employee.update(id,realdto);
        
    }
}
