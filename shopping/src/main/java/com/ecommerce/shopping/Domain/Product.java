package com.ecommerce.shopping.Domain;

import org.aspectj.weaver.ast.Or;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


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

    @Column(name = "inventory_amount")
    private int amount;

    @Column(name = "price")
    private float price;

    @ManyToOne
    @JoinColumn(name = "category_name", nullable = false)
    private Category category;

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    private Set<OrderProduct> orderProducts = new HashSet<OrderProduct>();
}
