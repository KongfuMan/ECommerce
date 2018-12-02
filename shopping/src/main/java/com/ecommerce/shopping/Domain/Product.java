package com.ecommerce.shopping.Domain;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;


@Entity
@Table(name = "Product")
public class Product {

    @Id
    @GeneratedValue(
            strategy= GenerationType.AUTO,
            generator="native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    @Column(name = "product_id")
    private long productId;
    @Column(name = "name")
    private String name;
    @Column(name = "amount")
    private String amount;
    @Column(name = "price")
    private String price;
    @Column(name = "product_catergory_id")
    private long catergoryId;
}
