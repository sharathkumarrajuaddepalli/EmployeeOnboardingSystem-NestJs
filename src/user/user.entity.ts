import { Employee } from 'src/employee/employee.entity';
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    sno: number;
    @Column()
    emailId: string;
    @Column()
    password: string;
    @Column()
    name: string;
    @Column()
    roleId: number;
    @OneToOne(()=>Employee,{nullable: true})
    @JoinColumn()
    employee: Employee;

}