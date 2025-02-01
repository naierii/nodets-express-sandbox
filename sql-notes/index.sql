-- FILTERS
SELECT *
FROM books
WHERE publication_year < 2015
AND genre = 'Fantasy'
AND UPPER(title) LIKE '%DRAGON%';

-- ORDER BY
SELECT *
FROM books
WHERE genre = 'Mystery'
ORDER BY publication_year ASC;

-- JOIN
SELECT b.title, bo.name
FROM books b -- alias
JOIN borrowers bo ON b.borrower_id = bo.borrower_id;
-- or
SELECT books.title, borrowers.name
FROM books
JOIN borrowers ON books.borrower_id = borrowers_id

SELECT products.name AS product_name, categories.name AS category_name
from products
JOIN categories ON products.category_id = categories.category_id;

SELECT name, MAX(price) AS highest_price
FROM products
WHERE category_id = 1;