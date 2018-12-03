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

    public int getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(int orderNum) {
        this.orderNum = orderNum;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Transaction getTransaction() {
        return transaction;
    }

    public void setTransaction(Transaction transaction) {
        this.transaction = transaction;
    }

    public Set<OrderProduct> getOrderProductIds() {
        return orderProductIds;
    }

    public void setOrderProductIds(Set<OrderProduct> orderProductIds) {
        this.orderProductIds = orderProductIds;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderNum=" + orderNum +
                ", customer=" + customer +
                ", transaction=" + transaction +
                ", orderProductIds=" + orderProductIds +
                '}';
    }
}
