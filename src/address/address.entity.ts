import { Employee } from "src/employee/employee.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address extends BaseEntity{
    @PrimaryGeneratedColumn()
    addressId: number;
    @Column()
    type: string;
    @Column()
    flatName: string;
    @Column()
    street: string;
    @Column()
    area: string;
    @Column()
    state: string;
    @Column()
    country: string;
    @Column()
    city: string;
    @Column()
    pincode: string;
    @Column()
    mapCoordinates: string;
    @ManyToOne(()=>Employee, employee=>employee.addressList)
    employee: Employee;

}