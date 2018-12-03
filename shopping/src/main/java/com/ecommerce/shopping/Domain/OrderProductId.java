package com.ecommerce.shopping.Domain;


import javax.persistence.*;
import java.io.Serializable;

@Embeddable
public class OrderProductId implements Serializable{

    @Column(name = "order_id")
    private long orderId;

    @Column(name = "product_id")
    private long productId;

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    @Override
    public String toString() {
        return "OrderProductId{" +
                "orderId=" + orderId +
                ", productId=" + productId +
                '}';
    }
}
