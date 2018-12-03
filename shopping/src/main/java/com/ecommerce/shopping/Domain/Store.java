package com.ecommerce.shopping.Domain;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "Store")
public class Store {
    @Id
    @GeneratedValue(
            strategy= GenerationType.AUTO,
            generator="native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    @Column(name = "store_id")
    private int storeId;

    @Column(name = "name")
    private String name;

    @OneToOne(mappedBy = "store", fetch = FetchType.LAZY)
    @JoinColumn(name = "mgr_id", nullable = false)
    private Manager mgr;
}
