package com.ecommerce.shopping.Domain;

import org.aspectj.weaver.ast.Or;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Customer")
public class Customer extends User{


    @OneToMany(mappedBy = "customer",fetch = FetchType.LAZY)
    private Set<Transaction> transactions = new HashSet<Transaction>();

    @OneToMany(mappedBy = "customer",fetch = FetchType.LAZY)
    private Set<Order> orders = new HashSet<Order>();

    @Override
    public String toString() {
        return "Customer{} " + super.toString();
    }

    public Set<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(Set<Transaction> transactions) {
        this.transactions = transactions;
    }

    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }
}
