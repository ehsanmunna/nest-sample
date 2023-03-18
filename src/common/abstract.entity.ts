import { BeforeInsert, BeforeUpdate, Column, Index, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export class AbstractEntity {
    @PrimaryColumn({ readonly: true })
    @PrimaryGeneratedColumn()
    @Index({ unique: true })
    id: string;

    @Column({ name: 'createdAt' })
    created_at: Date;

    @Column({ name: 'updatedAt' })
    updated_at: Date;

    @BeforeInsert()
    public setCreateDate(): void {
        this.created_at = new Date();
        this.updated_at = new Date();
    }

    @BeforeUpdate()
    public setUpdateDate(): void {
        this.updated_at = new Date();
    }
}
