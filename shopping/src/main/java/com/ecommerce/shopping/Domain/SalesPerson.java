package com.ecommerce.shopping.Domain;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "SalesPerson")
public class SalesPerson {
    @Id
    @GeneratedValue(
            strategy= GenerationType.AUTO,
            generator="native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    @Column(name = "person_id")
    private int personId;
    @Column(name = "name")
    private String name;
    @Column(name = "address_id")
    private int addressId;
    @Column(name = "email")
    private String email;
    @Column(name = "job_title")
    private String jobTitle;
    @Column(name = "store_id")
    private int storeId;
    @Column(name = "salary")
    private double salary;
}
