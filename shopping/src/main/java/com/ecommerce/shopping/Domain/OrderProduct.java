package com.ecommerce.shopping.Domain;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name="Order_Product")
public class OrderProduct {
    @EmbeddedId
    OrderProductId id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    private Order order;

    @Column(name = "product_amount")
    private int productAmount;
}
