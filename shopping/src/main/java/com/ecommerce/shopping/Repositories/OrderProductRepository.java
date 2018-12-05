package com.ecommerce.shopping.Repositories;

import com.ecommerce.shopping.Domain.OrderProduct;
import com.ecommerce.shopping.Domain.OrderProductId;
import org.springframework.data.repository.CrudRepository;

public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductId> {

}
