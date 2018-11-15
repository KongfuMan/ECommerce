package com.ecommerce.shopping.Domain.Security;


import com.ecommerce.shopping.Domain.User;
import jdk.nashorn.internal.objects.annotations.Constructor;

import javax.persistence.*;
import java.io.Serializable;


// A  intermediate table between User and Role (manytomany relation)
@Entity
@Table(name = "User_Role")
public class UserRole implements Serializable{
    private static final long serialVersionID = 29347298349L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userRoleId;

    @ManyToOne(fetch = FetchType.EAGER) //
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER) //
    @JoinColumn(name = "role_id")
    private Role role;

    public UserRole(){

    }

    public UserRole(User user, Role role){
        this.user = user;
        this.role = role;
    }

    public static long getSerialVersionID() {
        return serialVersionID;
    }

    public long getUserRoleId() {
        return userRoleId;
    }

//    @Override
//    public String toString() {
//        return "UserRole{" +
//                "userRoleId=" + userRoleId +
//                ", user=" + user +
//                ", role=" + role +
//                '}';
//    }

    public void setUserRoleId(long userRoleId) {
        this.userRoleId = userRoleId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
