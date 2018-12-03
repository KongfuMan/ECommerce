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
    @JoinColumn(name = "mgr_id",unique = true, nullable = false)
    private Manager mgr;

    public int getStoreId() {
        return storeId;
    }

    public void setStoreId(int storeId) {
        this.storeId = storeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Manager getMgr() {
        return mgr;
    }

    public void setMgr(Manager mgr) {
        this.mgr = mgr;
    }

    @Override
    public String toString() {
        return "Store{" +
                "storeId=" + storeId +
                ", name='" + name + '\'' +
                ", mgr=" + mgr +
                '}';
    }
}
