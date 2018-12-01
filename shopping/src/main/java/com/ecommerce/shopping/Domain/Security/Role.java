package com.ecommerce.shopping.Domain.Security;

import com.ecommerce.shopping.Domain.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Role")
public class Role implements Serializable{
    private static final long serialVersionID = 28934792837L;

    @Id
    @Column(name = "role_id",nullable = false, updatable = false)
    @GeneratedValue(
            strategy= GenerationType.AUTO,
            generator="native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private int roleId;

    private String name;

    @OneToMany(mappedBy = "userRole", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<User> users = new HashSet<User>();

    public Role(){
    }

    public Role(String name){
        this.setName(name);
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }
}
