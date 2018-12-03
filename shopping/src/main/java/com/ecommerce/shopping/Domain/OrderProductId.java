package com.ecommerce.shopping.Domain;


import javax.persistence.*;
import java.io.Serializable;

@Embeddable
public class OrderProductId implements Serializable{

    @Column(name = "order_id")
    private long orderId;

    @Column(name = "product_id")
    private long productId;
}
