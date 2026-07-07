// 1. Yeni film əlavə et
db.movies.insertOne({"id": 6, "title": "Dune", "genre": "Sci-Fi", "year": 2021, "rating": 8.0});

// 2. Bütün filmləri tap
db.movies.find({});

// 3. Yalnız Sci-Fi filmlərini tap
db.movies.find({"genre": "Sci-Fi"});

// 4. Reytinqi 8 və ya daha çox olan filmləri tap
db.movies.find({"rating": {"$gte": 8}});

// 5. id = 3 olan filmin reytinqini 8.3 olaraq yenilə
db.movies.updateOne({"id": 3}, {"$set": {"rating": 8.3}});

// 6. id = 4 olan filmi sil
db.movies.deleteOne({"id": 4});

// 7. Ümumi filmlərin sayını tap
db.movies.countDocuments({});

// 8. Bonus: Reytinqə görə azalan ardıcıllıqla (descending) sırala
db.movies.find({}).sort({"rating": -1});
