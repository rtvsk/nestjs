import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreactionAttrs {
    email: string;
    password: string;
}

@Table({
    tableName: 'users',
})
export class User extends Model<User, UserCreactionAttrs> {

    @ApiProperty({ example: 1, description: 'unique id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: "mail@mail.ru", description: 'users mail' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: "123", description: 'users password' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: false, description: 'is user banned' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: "bad guy", description: 'ban reason' })
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}