package com.ecommerce.shopping.Repositories;

import com.ecommerce.shopping.Domain.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Integer> {

}
