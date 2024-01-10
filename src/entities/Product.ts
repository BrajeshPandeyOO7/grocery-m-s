import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: "varchar", length: 200, nullable: false })
    name: string;

    @Column({ type: "varchar", length: 200, nullable: false })
    category: string;

    @Column({ type: "varchar", length: 200, nullable: false })
    brand: string;

    @Column({type: "int", nullable: false})
    unit_price: number

    @Column({type: "int", nullable: false})
    quantity_instock: number;

    @Column({type: "int", nullable: false})
    weight: number; // weight should be in gram;

    @Column({type: 'date', nullable: false})
    manufacture_date: Date;

    @Column({type: 'date', nullable: false})
    expiry_date: Date;

    @CreateDateColumn()
    created_at: Date;
        
    @UpdateDateColumn()
    updated_at: Date;
}