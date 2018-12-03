package com.ecommerce.shopping.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @JsonIgnore
    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    private Set<OrderProduct> orderProducts = new HashSet<OrderProduct>();

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Set<OrderProduct> getOrderProducts() {
        return orderProducts;
    }

    public void setOrderProducts(Set<OrderProduct> orderProducts) {
        this.orderProducts = orderProducts;
    }

    @Override
    public String toString() {  //dont serialize those depending on this object
        return "Product{" +
                "productId=" + productId +
                ", name='" + name + '\'' +
                ", amount=" + amount +
                ", price=" + price +
                ", category=" + category +
                '}';
    }
}
