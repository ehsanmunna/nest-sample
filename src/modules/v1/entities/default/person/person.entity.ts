import { AbstractEntity } from "src/common/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: 'person', database: 'default' })
export class PersonEntity extends AbstractEntity {
    @Column({ type: 'varchar', length: 150  })
    name: string;
}