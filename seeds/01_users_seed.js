/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          city: "New York",
          email: "john.smith@example.com",
          first_name: "John",
          last_name: "Smith",
          password: "password123",
          phone_number: "(123) 456-7890",
          province: "NY",
          street_number: "10",
          username: "jsmith",
          country: "USA",
          img: "john.jpg",
          balance: "1000", // Random balance value for John Smith
          last_opened: "2023-06-18", // Random last opened value for John Smith
          last_payment: "500", // Random last payment value for John Smith
          unique_id: "ABC123", // Random unique ID value for John Smith
          last_payment_date: "2023-06-15", // Random last payment date for John Smith
          last_month_expense: "800" // Random last month expense for John Smith
        },
        {
          city: "Los Angeles",
          email: "emily.johnson@example.com",
          first_name: "Emily",
          last_name: "Johnson",
          password: "pass1234",
          phone_number: "(234) 567-8901",
          province: "CA",
          street_number: "22",
          username: "ejohnson",
          country: "USA",
          img: "emily.jpg",
          balance: "2500", // Random balance value for Emily Johnson
          last_opened: "2023-06-17", // Random last opened value for Emily Johnson
          last_payment: "800", // Random last payment value for Emily Johnson
          unique_id: "DEF456", // Random unique ID value for Emily Johnson
          last_payment_date: "2023-06-12", // Random last payment date for Emily Johnson
          last_month_expense: "1200" // Random last month expense for Emily Johnson
        },
        {
          city: "Toronto",
          email: "michael.williams@example.com",
          first_name: "Michael",
          last_name: "Williams",
          password: "hello123",
          phone_number: "(345) 678-9012",
          province: "ON",
          street_number: "35",
          username: "mwilliams",
          country: "Canada",
          img: "michael.jpg",
          balance: "1500", // Random balance value for Michael Williams
          last_opened: "2023-06-16", // Random last opened value for Michael Williams
          last_payment: "300", // Random last payment value for Michael Williams
          unique_id: "GHI789", // Random unique ID value for Michael Williams
          last_payment_date: "2023-06-14", // Random last payment date for Michael Williams
          last_month_expense: "900" // Random last month expense for Michael Williams
        },
        {
          city: "Vancouver",
          email: "emma.jones@example.com",
          first_name: "Emma",
          last_name: "Jones",
          password: "welcome123",
          phone_number: "(456) 789-0123",
          province: "BC",
          street_number: "50",
          username: "ejones",
          country: "Canada",
          img: "emma.jpg",
          balance: "2000", // Random balance value for Emma Jones
          last_opened: "2023-06-16", // Random last opened value for Emma Jones
          last_payment: "600", // Random last payment value for Emma Jones
          unique_id: "JKL012", // Random unique ID value for Emma Jones
          last_payment_date: "2023-06-13", // Random last payment date for Emma Jones
          last_month_expense: "1100" // Random last month expense for Emma Jones
        },
        {
          city: "Chicago",
          email: "daniel.brown@example.com",
          first_name: "Daniel",
          last_name: "Brown",
          password: "12345678",
          phone_number: "(567) 890-1234",
          province: "IL",
          street_number: "18",
          username: "dbrown",
          country: "USA",
          img: "daniel.jpg",
          balance: "1800", // Random balance value for Daniel Brown
          last_opened: "2023-06-15", // Random last opened value for Daniel Brown
          last_payment: "400", // Random last payment value for Daniel Brown
          unique_id: "MNO345", // Random unique ID value for Daniel Brown
          last_payment_date: "2023-06-11", // Random last payment date for Daniel Brown
          last_month_expense: "950" // Random last month expense for Daniel Brown
        },
        {
          city: "Houston",
          email: "olivia.davis@example.com",
          first_name: "Olivia",
          last_name: "Davis",
          password: "qwerty123",
          phone_number: "(678) 901-2345",
          province: "TX",
          street_number: "75",
          username: "odavis",
          country: "USA",
          img: "olivia.jpg",
          balance: "2200", // Random balance value for Olivia Davis
          last_opened: "2023-06-14", // Random last opened value for Olivia Davis
          last_payment: "700", // Random last payment value for Olivia Davis
          unique_id: "PQR678", // Random unique ID value for Olivia Davis
          last_payment_date: "2023-06-10", // Random last payment date for Olivia Davis
          last_month_expense: "1300" // Random last month expense for Olivia Davis
        },
        {
          city: "Montreal",
          email: "matthew.miller@example.com",
          first_name: "Matthew",
          last_name: "Miller",
          password: "password456",
          phone_number: "(789) 012-3456",
          province: "QC",
          street_number: "28",
          username: "mmiller",
          country: "Canada",
          img: "matthew.jpg",
          balance: "1900", // Random balance value for Matthew Miller
          last_opened: "2023-06-13", // Random last opened value for Matthew Miller
          last_payment: "450", // Random last payment value for Matthew Miller
          unique_id: "STU901", // Random unique ID value for Matthew Miller
          last_payment_date: "2023-06-09", // Random last payment date for Matthew Miller
          last_month_expense: "1000" // Random last month expense for Matthew Miller
        },
        {
          city: "Miami",
          email: "sophia.wilson@example.com",
          first_name: "Sophia",
          last_name: "Wilson",
          password: "987654321",
          phone_number: "(890) 123-4567",
          province: "FL",
          street_number: "42",
          username: "swilson",
          country: "USA",
          img: "sophia.jpg",
          balance: "2800", // Random balance value for Sophia Wilson
          last_opened: "2023-06-12", // Random last opened value for Sophia Wilson
          last_payment: "900", // Random last payment value for Sophia Wilson
          unique_id: "VWX012", // Random unique ID value for Sophia Wilson
          last_payment_date: "2023-06-08", // Random last payment date for Sophia Wilson
          last_month_expense: "1500" // Random last month expense for Sophia Wilson
        }
      ]);
    });
};
