package com.ecommerce.shopping.Repositories;

import com.ecommerce.shopping.Domain.Order;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface OrderRepository extends CrudRepository<Order, Integer> {

}
