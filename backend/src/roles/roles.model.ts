import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreactionAttrs {
    value: string;
    description: string;
}

@Table({
    tableName: 'roles',
    createdAt: false,
    updatedAt: false,
})
export class Role extends Model<Role, RoleCreactionAttrs> {

    @ApiProperty({ example: 1, description: 'unique role id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: "ADMIN", description: 'role value' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @ApiProperty({ example: "administrator", description: 'role description' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}