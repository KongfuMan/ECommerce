package com.ecommerce.shopping.Domain;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "Region")
public class Region {
    @Id
    @GeneratedValue(
            strategy= GenerationType.AUTO,
            generator="native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    @Column(name = "region_id")
    private int regionId;
    @Column(name = "name")
    private String name;
    @Column(name = "region_manager_name")
    private String managerName;
}
