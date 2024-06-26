
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({database:"db1"})
export class User {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()   
    name:string

    @Column()
    email:string    

    @Column()
    password:string

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
    
}
