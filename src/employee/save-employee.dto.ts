import { Address } from './../address/address.entity';
export default class SaveEmployeeDto{
    employeeId: number;

    employeeName: string;

    phoneNumber: string;

    emailId: string;
    
    bloodGroup: string;
    
    aadharNumber: string;
    
    dob: string;
    
    gender: string;
    
    sslcScore: string;
    
    hscScore: string;
    
    ugScore: string;
    
    fatherName: string;
    
    motherName: string;
    
    emergencyContactName: string;
    
    emergencyContactRelation: string;
    
    emergencyContactNumber: string;
    
    addressList: Address[];
}