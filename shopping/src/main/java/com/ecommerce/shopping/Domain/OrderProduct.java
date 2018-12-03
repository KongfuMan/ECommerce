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

    public OrderProductId getId() {
        return id;
    }

    public void setId(OrderProductId id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public int getProductAmount() {
        return productAmount;
    }

    public void setProductAmount(int productAmount) {
        this.productAmount = productAmount;
    }

    @Override
    public String toString() {
        return "OrderProduct{" +
                "id=" + id +
                ", product=" + product +
                ", order=" + order +
                ", productAmount=" + productAmount +
                '}';
    }
}
