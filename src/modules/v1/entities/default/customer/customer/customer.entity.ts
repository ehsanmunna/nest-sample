import { AbstractEntity } from "src/common/abstract.entity";
import { Column } from "typeorm";

export class CustomerEntity extends AbstractEntity {
    @Column({ type: 'varchar', length: 150  })
    name: string;
}