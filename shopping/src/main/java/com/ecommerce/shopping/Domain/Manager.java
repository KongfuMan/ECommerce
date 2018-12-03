package com.ecommerce.shopping.Domain;


import org.hibernate.annotations.GenericGenerator;
import org.springframework.security.core.Transient;

import javax.persistence.*;

@Entity
@Table(name = "Manager")
public class Manager extends User {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id", nullable = false)
    private Store store;
}
