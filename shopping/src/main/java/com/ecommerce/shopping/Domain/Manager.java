package com.ecommerce.shopping.Domain;


import org.hibernate.annotations.GenericGenerator;
import org.springframework.security.core.Transient;

import javax.persistence.*;

@Entity
@Table(name = "Manager")
public class Manager extends User {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id", unique = true)
    private Store store;

    public Store getStore() {
        return store;
    }

    public void setStore(Store store) {
        this.store = store;
    }

    @Override
    public String toString() {
        return "Manager{" +
                "store=" + store==null? "null" : store +
                "} " + super.toString();
    }
}
