package com.ecommerce.shopping.Domain;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "\"Order\"")
public class Order {

    @Id
    @GeneratedValue(
            strategy= GenerationType.AUTO,
            generator="native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    @Column(name = "order_number")
    private int orderNum;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "transaciont_id")
    private Transaction transaction;

    @OneToMany(mappedBy = "order")
    private Set<OrderProduct> orderProductIds= new HashSet<OrderProduct>();
}
