movies = [
    {"id": 1, "title": "Interstellar", "genre": "Sci-Fi", "year": 2014, "rating": 8.7},
    {"id": 2, "title": "Inception", "genre": "Sci-Fi", "year": 2010, "rating": 8.8},
    {"id": 3, "title": "The Batman", "genre": "Action", "year": 2022, "rating": 7.9},
    {"id": 4, "title": "Titanic", "genre": "Drama", "year": 1997, "rating": 7.8},
    {"id": 5, "title": "Oppenheimer", "genre": "Biography", "year": 2023, "rating": 8.5},
]

def get_movies(page, page_size):
    start = (page - 1) * page_size
    return movies[start:start + page_size]

def get_movies_with_meta(page, page_size):
    import math
    total_pages = math.ceil(len(movies) / page_size)
    data = get_movies(page, page_size)
    return {
        "page": page,
        "page_size": page_size,
        "next": page + 1 if page < total_pages else None,
        "prev": page - 1 if page > 1 else None,
        "total_pages": total_pages,
        "data": data
    }