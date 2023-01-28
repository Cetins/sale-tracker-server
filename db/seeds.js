use sale_tracker;
db.dropDatabase();

db.shop.insertMany([
    {
        name: "Brush Barbers",
        email: "brushbarbers@mail.com",
        passCode: "1234"
    }
])

db.staff.insertMany([
    {
        name: "Husso",
        email: "huseyinsezencetin@gmail.com",
        category: "Self-employed",
        service_percentage: 0,
        product_percentage: 0,
    },
    {
        name: "Tracey",
        email: "tracey@mail.com",
        category: "Self-employed",
        service_percentage: 50,
    },
    {
        name: "Christine",
        email: "chris@mail.com",
        category: "Wages",
        wages_per_hour: 9.5,
        product_percentage: 5,
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
