package com.ecommerce.shopping.Services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Methods {

	public static void main(String[] args) {
		// the number of products
		int productNumber = 20;
		// the number of users(only 1 manager, the rest of them are customers)
		int userNumber = 20;
		// the number of address(no less then the number of users)
		int addressNumber = 20;
		List<Map<String, Object>> products = createProducts(productNumber);
		List<Map<String, Object>> users = createUsers(userNumber);
		List<Map<String, Object>> managers = createManagers(1);
		List<Map<String, Object>> customers = createCustomers(userNumber - 1);
		List<Map<String, Object>> addresses = createAddresses(addressNumber);
		System.out.println(users);
		System.out.println(products);
		System.out.println(managers);
		System.out.println(customers);
		System.out.println(addresses);
	}

	public static List<Map<String, Object>> createProducts(int number) {
		List<Map<String, Object>> products = new ArrayList<Map<String, Object>>();
		for (int i = 1; i <= number; i++) {
			Map<String, Object> product = new HashMap<String, Object>();
			product.put("Id", i);
			product.put("Name", "Product" + i);
			product.put("Price", i);
			product.put("ShopId", 1);
			product.put("Amount", i);
			product.put("Category", i % 10);
			products.add(product);
		}
		return products;
	}

	public static List<Map<String, Object>> createUsers(int number) {
		List<Map<String, Object>> users = new ArrayList<Map<String, Object>>();
		if (number < 2) {
			return null;
		}
		Map<String, Object> manager = new HashMap<String, Object>();
		manager.put("Id", 1);
		manager.put("Name", "ManagerName" + 1);
		manager.put("UserName", "UserName" + 1);
		// Need Bcrypt here to convert Password
		manager.put("Password", 1);
		manager.put("Role", "Manager");
		users.add(manager);
		for (int i = 2; i <= number; i++) {
			Map<String, Object> user = new HashMap<String, Object>();
			user.put("Id", i);
			user.put("Name", "CustomerName" + i);
			user.put("UserName", "UserName" + i);
			user.put("Password", i);
			user.put("Role", "Customer");
			users.add(user);
		}
		return users;
	}

	public static List<Map<String, Object>> createCustomers(int number) {
		List<Map<String, Object>> customers = new ArrayList<Map<String, Object>>();
		for (int i = 2; i <= number + 1; i++) {
			Map<String, Object> customer = new HashMap<String, Object>();
			customer.put("CustomerId", i);
			customer.put("CustomerName", "CustomerName" + i);
			customer.put("AddressId", i);
			customers.add(customer);
		}
		return customers;
	}

	public static List<Map<String, Object>> createManagers(int number) {
		List<Map<String, Object>> managers = new ArrayList<Map<String, Object>>();
		for (int i = 1; i <= 1; i++) {
			Map<String, Object> manager = new HashMap<String, Object>();
			manager.put("ManagerId", i);
			manager.put("ManagerName", "ManagerName" + i);
			manager.put("AddressId", i);
			managers.add(manager);
		}
		return managers;
	}

	public static List<Map<String, Object>> createAddresses(int number) {
		List<Map<String, Object>> addresses = new ArrayList<Map<String, Object>>();
		for (int i = 1; i <= number; i++) {
			Map<String, Object> address = new HashMap<String, Object>();
			address.put("AddressId", i);
			address.put("Street", "Street" + i);
			address.put("City", "City" + i);
			address.put("State", "State" + i);
			address.put("Zip", "Zip" + i);
			addresses.add(address);
		}
		return addresses;
	}
}
