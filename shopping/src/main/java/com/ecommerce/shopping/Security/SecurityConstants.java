package com.ecommerce.shopping.Security;

public class SecurityConstants {
    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final long EXPIRATION_TIME = 864_000_000; // 10 days
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String SIGN_IN_URL = "user/login";
    public static final String SIGN_UP_URL = "/signup";
    public static final String TEST_WEBSOCKET = "/sendreminder";
    public static final String GET_ALL_USERS = "/getallusers";
    public static final String GET_VALID_REMINDERS = "/getvalidreminders";
    public static final String GET_HISTORY_REMINDERS = "/gethistoryreminders";
    public static final String EMPTY = "";
    public static final String EMPTY_SLASH = "/";
    public static final String AUTHEN = "user/authenticate";
    public static final String GET_ALL_PATIENTS="doctor/getallpatients";

    public static final String POST_DOCTOR_REMINDERS = "doctor/postreminders";

}
