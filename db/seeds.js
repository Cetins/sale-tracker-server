use sale_tracker;
db.dropDatabase();

// db.users.insertMany([
//     {
//         first_name: "Michael",
//         last_name: "Purple",
//         email: "test@mail.com",
//         admin_pascode: 1234,
//         shop: {
//                 name: "Test Shop",
//                 address: "123 Green Street T12 3TT",
//                 phone: "0123456789",     
//             },
//         staff: [
//             {
//                 first_name: "Michael",
//                 last_name: "Purple",
//                 email: "mpurple@mail.com",
//                 phone: "07770888999",
//                 payment_category: "Business Owner",
//             },
//             {
//                 first_name: "Jennifer",
//                 last_name: "Blue",
//                 email: "jblue@mail.com",
//                 phone: "07770888999",
//                 payment_category: "Self Employed",
//                 service_commission_percentage: 50,
//                 product_commission_percentage: 5
//             },
//             {
//                 first_name: "Pamela",
//                 last_name: "Yellow",
//                 email: "pyellow@mail.com",
//                 phone: "07770888999",
//                 payment_category: "Wages",
//                 wages_per_hour: 9.50,
//             }
//         ],
//         services: [
//             {
//                 title: "Cleaning",
//                 duration: 50,
//                 price: 30
//             },
//             {
//                 title: "Laundry",
//                 duration: 40,
//                 price: 25
//             }
//         ],
//         products: [
//             {
//                 title: "Glass Spray",
//                 manufacturer: "Glass ltd",
//                 price: 18,
//                 cost: 9,
//                 stock: 23,
//                 sold: 0
//             },
//             {
//                 title: "Laundry Pods",
//                 manufacturer: "Laundry ltd",
//                 price: 13,
//                 cost: 6.5,
//                 stock: 14,
//                 sold: 0
//             },
//             {
//                 title: "Microfiber Cloths",
//                 manufacturer: "Cloth ltd",
//                 price: 5,
//                 cost: 2.5,
//                 stock: 3,
//                 sold: 0
//             }
//         ]
//     },
//     {
//         email: "demo@mail.com",
//         shop: {
//                 name: "Demo Shop",
//                 address: "123 Green Street T12 3TT",
//                 phone: "0123456789",
//                 branchName: "GreenStreet",
//                 sales_database: null
//             },
//         staff: [
//             {
//                 first_name: "Michael",
//                 last_name: "Purple",
//                 email: "mpurple@mail.com",
//                 phone: "07770888999",
//                 admin_access: true,
//                 admin_pascode: 1234,
//                 payment_category: "Business Owner",
//             },
//             {
//                 first_name: "Jennifer",
//                 last_name: "Blue",
//                 email: "jblue@mail.com",
//                 phone: "07770888999",
//                 admin_access: false,
//                 payment_category: "Self Employed",
//                 service_commission_percentage: 50,
//                 product_commission_percentage: 5
//             },
//             {
//                 first_name: "Pamela",
//                 last_name: "Yellow",
//                 email: "pyellow@mail.com",
//                 phone: "07770888999",
//                 admin_access: false,
//                 payment_category: "Wages",
//                 wages_per_hour: 9.50,
//             }
//         ],
//         services: [
//             {
//                 title: "Cleaning",
//                 duration: 50,
//                 price: 30
//             },
//             {
//                 title: "Laundry",
//                 duration: 40,
//                 price: 25
//             }
//         ],
//         products: [
//             {
//                 title: "Glass Spray",
//                 manufacturer: "Glass ltd",
//                 price: 18,
//                 cost: 9,
//                 stock: 23,
//                 sold: 0
//             },
//             {
//                 title: "Laundry Pods",
//                 manufacturer: "Laundry ltd",
//                 price: 13,
//                 cost: 6.5,
//                 stock: 14,
//                 sold: 0
//             },
//             {
//                 title: "Microfiber Cloths",
//                 manufacturer: "Cloth ltd",
//                 price: 5,
//                 cost: 2.5,
//                 stock: 3,
//                 sold: 0
//             }
//         ]
//     }
// ]);

// db.sales.insertMany([]);


db.shop.insertMany([
    {
        name: "Demo Barbers",
        email: "demo@mail.com",
        passCode: "1234"
    }
])

db.staff.insertMany([
    {
        username: "Heather",
        first_name: "Heather",
        last_name: "Blue",
        email: "heather@mail.com",
        category: "Business Owner",
        service_commission_percentage: 0,
        product_commission_percentage: 0,
    },
    {
        username: "Amanda",
        first_name: "Amanda",
        last_name: "Green",
        email: "amanda@mail.com",
        category: "Self Employed",
        service_commission_percentage: 50,
    },
    {
        username: "Penny",
        first_name: "Penny",
        last_name: "Violet",
        email: "penny@mail.com",
        category: "Wages",
        wages_per_hour: 9.5,
        product_commission_percentage: 5,
    }
])

db.services.insertMany([
    {
        title: "Cut & Style",
        duration: 30,
        price: 35
    },
    {
        title: "Beard Trim",
        duration: 20,
        price: 20
    },
    {
        title: "Kid's Haircut",
        duration: 20,
        price: 25
    },
    {
        title: "Hot Towel Shave",
        duration: 45,
        price: 32
    },
    {
        title: "Vip Pampering Package",
        duration: 90,
        price: 70
    },
])

db.products.insertMany([
    {
        title: "Sea Salt Spray",
        manufacturer: "company ltd",
        price: 18,
        cost: 9,
        stock: 23,
        sold: 0
    },
    {
        title: "Hair Pomade",
        manufacturer: "company ltd",
        price: 12,
        cost: 4.8,
        stock: 9,
        sold: 0
    },
    {
        title: "Clay",
        manufacturer: "company ltd",
        price: 12,
        cost: 5,
        stock: 8,
        sold: 0
    },
    {
        title: "Wax",
        manufacturer: "company ltd",
        price: 15,
        cost: 10,
        stock: 3,
        sold: 0
    },
    {
        title: "Beard Oil",
        manufacturer: "company ltd",
        price: 15,
        cost: 7,
        stock: 3,
        sold: 0
    }
])

db.sales.insertMany([
    {
        category: "service",
        title: "test service",
        serviceId: 121212,
        price: 30,
        staff: "test staff",
        staffId: 1234,
        date: "2022-01-01"
    },
    {
        category: "product",
        title: "test product",
        productId: 01234567,
        price: 5,
        staff: "test staff",
        staffId: 1234,
        date: "2022-01-01"
    }
])

db.logs.insertMany([
    {
        content: "all logs will be collected here.",
        date: "2022-01-01"
    }
])
