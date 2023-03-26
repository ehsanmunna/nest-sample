import { AbstractEntity } from "src/common/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: 'customer', database: 'default' })
export class CustomerEntity extends AbstractEntity {
    @Column({ type: 'varchar', length: 150  })
    name: string;
}