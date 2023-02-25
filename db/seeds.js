use sale_tracker;
db.dropDatabase();

db.shops.insertMany([
    {
        title: "Demo Barbers",
        email: "demo@mail.com",
        passCode: "1234",
        employees: [
            {
                username: "Heather",
                first_name: "Heather",
                last_name: "Blue",
                email: "heather@mail.com",
                category: "Business Owner",
                service_commission_percentage: 0,
                product_commission_percentage: 0,
                services: [
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
                        title: "Hot Towel Shave",
                        duration: 45,
                        price: 32
                    },
                    {
                        title: "Vip Pampering Package",
                        duration: 90,
                        price: 70
                    }
                ]
            },
            {
                username: "Amanda",
                first_name: "Amanda",
                last_name: "Green",
                email: "amanda@mail.com",
                category: "Self Employed",
                service_commission_percentage: 50,
                services: [
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
                    }
                ]
            },
            {
                username: "Penny",
                first_name: "Penny",
                last_name: "Violet",
                email: "penny@mail.com",
                category: "Wages",
                wages_per_hour: 9.5,
                product_commission_percentage: 5,
                services: [
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
                    }
                ]
            }
        ],
        products: [
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
        ]
    },
    {
        title: "Test Barbers",
        email: "test@mail.com",
        passCode: "1234",
        employees: [
            {
                username: "Heather",
                first_name: "Heather",
                last_name: "Blue",
                email: "heather@mail.com",
                category: "Business Owner",
                service_commission_percentage: 0,
                product_commission_percentage: 0,
                services: [
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
                        title: "Hot Towel Shave",
                        duration: 45,
                        price: 32
                    },
                    {
                        title: "Vip Pampering Package",
                        duration: 90,
                        price: 70
                    }
                ]
            },
            {
                username: "Amanda",
                first_name: "Amanda",
                last_name: "Green",
                email: "amanda@mail.com",
                category: "Self Employed",
                service_commission_percentage: 50,
                services: [
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
                    }
                ]
            },
            {
                username: "Penny",
                first_name: "Penny",
                last_name: "Violet",
                email: "penny@mail.com",
                category: "Wages",
                wages_per_hour: 9.5,
                product_commission_percentage: 5,
                services: [
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
                    }
                ]
            }
        ],
        products: [
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
                cost: 7.5,
                stock: 3,
                sold: 0
            },
            {
                title: "Beard Oil",
                manufacturer: "company ltd",
                price: 15.,
                cost: 7.5,
                stock: 3,
                sold: 0
            }
        ]
    }
])

db.sales.insertMany([
    {
        shop_id: "1234",
        employee_id: "1234",
        service_id: "12342",
        category: "service",
        title: "test service",
        price: 30,
        staff: "test staff",
        date: new Date('February 16, 2023 11:15:30')
    },
    {
        shop_id: "1234",
        employee_id: "1213634",
        product_id: "737357",
        category: "product",
        title: "test product",
        price: 10,
        staff: "test staff",
        date: new Date('February 16, 2023 11:20:30')
    }
])

db.logs.insertMany([
    {
        content: "all logs will be collected here.",
        date: new Date('February 16, 2023 11:20:45')
    }
])
