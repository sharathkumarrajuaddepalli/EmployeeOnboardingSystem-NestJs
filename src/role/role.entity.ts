import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Role extends BaseEntity{
    @PrimaryColumn()
    roleId: number;
    @Column()
    roleName: string;
}