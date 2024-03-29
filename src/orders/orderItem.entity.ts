import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  ManyToOne,
} from "typeorm";

import { Product } from "../products/product.entity";
import { Orders } from "./order.entity";

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  orderId: number;

  @ManyToOne(() => Orders)
  order: Orders;

  @Column()
  productId: number;

  @ManyToOne(() => Product)
  product: Product;

  @AfterInsert()
  logInsert() {
    console.log("OrderItem insert triggered with id: " + this.id);
  }
}
