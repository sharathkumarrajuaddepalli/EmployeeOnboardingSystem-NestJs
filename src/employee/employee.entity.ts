import { Address } from './../address/address.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee extends BaseEntity{
    @PrimaryGeneratedColumn()
    employeeId: number;
    @Column({nullable : true})
    employeeCode: string;
    @Column({nullable: true})
    roleId: number;
    @Column()
    employeeName: string;
    @Column({nullable : true})
    phoneNumber: string;
    @Column()
    emailId: string;
    @Column({nullable : true})
    bloodGroup: string;
    @Column({nullable : true})
    aadharNumber: string;
    @Column({nullable : true})
    dob: string;
    @Column({nullable : true})
    gender: string;
    @Column({nullable : true})
    sslcScore: string;
    @Column({nullable : true})
    hscScore: string;
    @Column({nullable : true})
    ugScore: string;
    @Column({nullable : true})
    fatherName: string;
    @Column({nullable : true})
    motherName: string;
    @Column({nullable : true})
    emergencyContactName: string;
    @Column({nullable : true})
    emergencyContactRelation: string;
    @Column({nullable : true})
    emergencyContactNumber: string;
    @Column()
    password: string;
    @CreateDateColumn()
    createdAt: Date;
    @Column({nullable : true})
    status: string;
    @Column({nullable : true})
    rejectReason: string;
    @OneToMany(()=>Address, address=>address.employee)
    addressList: Address[]

}