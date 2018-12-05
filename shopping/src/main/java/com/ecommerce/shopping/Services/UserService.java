package com.ecommerce.shopping.Services;

import com.ecommerce.shopping.Config.SecurityUtility;
import com.ecommerce.shopping.Domain.*;
import com.ecommerce.shopping.Domain.Security.Role;
import com.ecommerce.shopping.Exceptions.UsernameAlreadyExistsExceptions;
import com.ecommerce.shopping.Repositories.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
public class UserService {

    private static final Logger LOG = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;


    @Autowired
    private ProductRepository productRepo;

    @Autowired
    private CategoryRepository categoryRepo;

    @Autowired
    private OrderRepository orderRepo;

    @Autowired
    private OrderProductRepository orderProductRepo;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private SecurityUtility securityUtility;

    public String authenticateUser(User user) throws Exception{
        if (user == null){
            throw new UsernameNotFoundException("User data is empty");
        }
        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword());
        Authentication authResult = authenticationManager.authenticate(authentication);
        return jwtService.createToken((User)authResult.getPrincipal());
    }

    @Transactional
    public String createNewUser(User user) throws Exception{
        if (user == null){
            throw new UsernameNotFoundException("User data is empty");
        }

        User localUser = userRepository.findByUsername(user.getUsername());
        if (localUser != null){
            throw new UsernameAlreadyExistsExceptions("Username {} already exist! Change another username");
        }else{
            String encryptedPsw = securityUtility.passwordEncoder().encode(user.getPassword());
            user.setPassword(encryptedPsw);
            Role role = roleRepository.findByName("CUSTOMER");
            role.getUsers().add(user);
            user.setUserRole(role);
            userRepository.save(user);
            String jwt = jwtService.createToken(user);
            return jwt;
        }
    }


    public void insertTestDataToDB(){
        List<Role> roles = createRole();
        roleRepository.saveAll(roles);
        List<User> custs = createCustomer(100,roles);
        userRepository.saveAll(custs);
        List<User> mgrs = createManager(1,roles);
        userRepository.saveAll(mgrs);
        List<Category> cats = createCategory();
        categoryRepo.saveAll(cats);
        List<Product> prods = createProducts(12,cats);
        productRepo.saveAll(prods);

        for (int i = 0; i < custs.size(); i++){
            createOrders(3, prods, (Customer)custs.get(i));
        }
    }

    public List<Role> createRole(){
        List<Role> roles = new ArrayList<Role>();
        roles.add(new Role("CUSTOMER"));
        roles.add(new Role("MANAGER"));
        return roles;
    }

    public List<User> createCustomer(int count, List<Role> roles){
        List<User> customers = new ArrayList<User>();
        for(int i = 0; i < count; i++){
            User user = new Customer();
            user.setUsername("Customer"+i);
            user.setUserRole(roles.get(0));
            user.setPassword("$2a$12$yLUHnvSa3NSeejfVrye6eu/483znEaSiy2uidZBy9.f3qB5JFV8DO");
            customers.add(user);
        }
        return customers;
    }

    public List<User> createManager(int count, List<Role> roles){
        List<User> managers = new ArrayList<User>();
        for(int i = 0; i < count; i++){
            User user = new Customer();
            user.setUsername("Manager"+i);
            user.setUserRole(roles.get(1));
            user.setPassword("$2a$12$yLUHnvSa3NSeejfVrye6eu/483znEaSiy2uidZBy9.f3qB5JFV8DO");
            managers.add(user);
        }
        return managers;
    }

    public List<Category> createCategory(){
        List<Category> cats = new ArrayList<>();
        for(int i = 0; i < 5; i++){
            Category cat = new Category();
            cat.setName("Category"+i);
            cats.add(cat);
        }
        return cats;
    }

    public List<Product> createProducts(int count,List<Category> cats){
        List<Product> prods = new ArrayList<>();
        Random rnd = new Random();
        for(int i = 0; i < count; i++){
            Product prod = new Product();
            prod.setAmount(rnd.nextInt(1000));
            prod.setCategory(cats.get(rnd.nextInt(5)));
            prod.setName("Product"+i);
            prod.setPrice(rnd.nextFloat()*1000);
            prods.add(prod);
        }
        return prods;
    }

    public List<Order> createOrders(int count, List<Product> products, Customer customer){
        List<Order> orders = new ArrayList();
        List<OrderProduct> orderProducts = new ArrayList();
        for (int j = 0; j < count; j++){
            Order order = new Order();
            order.setCustomer(customer);
//            Set<OrderProduct> orderProductSet = new HashSet<>();
            for (int i = 0; i < 3; i++){
                Product buy = products.get(i);
                OrderProduct orderProduct = new OrderProduct();
                orderProduct.setOrder(order);
                orderProduct.setProduct(buy);
                orderProduct.setProductAmount(1);
                orderProducts.add(orderProduct);
//                buy.setOrderProducts(orderProductSet);
            }
            orders.add(order);
//            order.setOrderProducts(orderProductSet);
//            orderProducts.addAll(orderProductSet);
        }
        orderRepo.saveAll(orders);
        orderProductRepo.saveAll(orderProducts);
        return orders;
    }
}
