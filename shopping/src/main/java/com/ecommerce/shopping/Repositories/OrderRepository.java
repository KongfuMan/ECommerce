package com.ecommerce.shopping.Repositories;

import com.ecommerce.shopping.Domain.Order;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface OrderRepository extends CrudRepository<Order, Integer> {

    @Query(value = "",nativeQuery = true)
    public Order findByOrderIdAnd(int id);

//    public Set<Order>
}
