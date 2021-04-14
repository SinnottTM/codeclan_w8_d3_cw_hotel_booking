use hotel_bookings;

db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Bob Boberton",
        email: "BobTheLad@gmail.com",
        checked_in: true
    },
    {
        name: "Frank Franklin",
        email: "FrankTheTank@yahoo.com",
        checked_in: false
    },
    {
        name: "Your Ma",
        email: "AVeryRudeStatement@aol.com",
        checked_in: true
    }
])