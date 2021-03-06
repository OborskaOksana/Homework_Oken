/*1.Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.*/
select * from client where length(FirstName)<6;

/*2.Вибрати львівські відділення банку.*/
select * from client where city='Lviv';

/*3.Вибрати клієнтів з вищою освітою та посортувати по прізвищу.*/
select * from client where Education='high' order by LastName;

/*4.Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.*/
SELECT * FROM application ORDER BY idApplication DESC LIMIT 5;

/*5.Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.*/
select * from client where LastName like '%ova' or '%ov';

/*6.Вивести клієнтів банку, які обслуговуються київськими відділеннями.*/
SELECT  * FROM client WHERE City='Kyiv';

/*7.Знайти унікальні імена клієнтів.*/
SELECT DISTINCT FirstName FROM client;

/*8.Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.*/
SELECT  * FROM application WHERE sum>5000;

/*9.Порахувати кількість клієнтів усіх відділень та лише львівських відділень.*/
SELECT sum(CountOfWorkers) FROM department;
SELECT Sum(CountOfWorkers) FROM department WHERE DepartmentCity = 'Lviv';

/*10.Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.*/
SELECT Client_idClient, FirstName, LastName, MAX(Sum)  FROM application
                                                                JOIN client c ON application.Client_idClient = c.idClient
GROUP BY Client_idClient;

/*11. Визначити кількість заявок на крдеит для кожного клієнта.*/
SELECT COUNT(Client_idClient) FROM application
GROUP BY Client_idClient;

# 12. Визначити найбільший та найменший кредити.
SELECT MAX(Sum) FROM application;
SELECT min(Sum) FROM application;

/*13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.*/
SELECT SUM(Sum) FROM application
                         JOIN client c ON application.Client_idClient = c.idClient
WHERE Education = 'high';

/*14. Вивести дані про клієнта, в якого середня сума кредитів найвища.*/
SELECT  (AVG(Sum)), FirstName, LastName   FROM application
                                                   JOIN client c ON application.Client_idClient = c.idClient
GROUP BY Client_idClient ORDER BY avg(sum) desc
LIMIT 1;

/*15. Вивести відділення, яке видало в кредити найбільше грошей. */
SELECT idDepartment, DepartmentCity, sum(Sum) FROM department d
                                                       JOIN client c ON d.idDepartment = c.Department_idDepartment
                                                       JOIN application a ON c.idClient = a.Client_idClient
GROUP BY d.idDepartment ORDER BY max(Sum) desc
    LIMIT 1;

/*16. Вивести відділення, яке видало найбільший кредит.*/
SELECT idDepartment, DepartmentCity, max(Sum) FROM department d
                                                       JOIN client c ON d.idDepartment = c.Department_idDepartment
                                                       JOIN application a ON c.idClient = a.Client_idClient
GROUP BY d.idDepartment ORDER BY max(Sum) desc
LIMIT 1;

/*17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.*/
UPDATE application
    JOIN client c ON application.Client_idClient = c.idClient
    SET Sum = 6000
WHERE c.Education = 'high';

/*18. Усіх клієнтів київських відділень пересилити до Києва.*/
UPDATE client c
    JOIN department d ON c.Department_idDepartment = d.idDepartment
SET City = 'Kyiv'
WHERE Department_idDepartment = '1' OR Department_idDepartment = '4';

/*19. Видалити усі кредити, які є повернені.*/
delete FROM application
WHERE CreditState = 'returned';

/*20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.*/
delete application FROM application
                            JOIN client c ON application.Client_idClient = c.idClient
WHERE substr(c.LastName,2,1) IN ('a', 'e', 'i', 'o', 'u');

/*21.Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000*/
SELECT DepartmentCity, sum FROM application
                                    JOIN client c ON application.Client_idClient = c.idClient
                                    JOIN department d ON c.Department_idDepartment = d.idDepartment
WHERE d.DepartmentCity = 'Lviv' AND Sum > 5000;

/*22.Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000*/
SELECT FirstName, LastName, sum, Currency FROM client
                                                   JOIN application a ON client.idClient = a.Client_idClient
WHERE CreditState = 'returned' AND sum >5000;

/*23.Знайти максимальний неповернений кредит.*/
SELECT max(Sum) FROM application
WHERE CreditState = 'Not returned';

/*24.Знайти клієнта, сума кредиту якого найменша*/
SELECT MIN(Sum), FirstName, LastName AS minCredit
FROM client c
         JOIN application a ON c.idClient = a.Client_idClient
GROUP BY Client_idClient
ORDER BY min(Sum)
LIMIT 1;

/*25.Знайти кредити, сума яких більша за середнє значення усіх кредитів*/
SELECT * FROM application
WHERE Sum > (SELECT avg(Sum) FROM application);

/*26. Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів*/
SELECT count(Client_idClient) FROM client
JOIN application a ON client.idClient = a.Client_idClient
WHERE (SELECT City="?????");

/*27. Місто клієнта з найбільшою кількістю кредитів*/
SELECT * FROM client c
                  JOIN application a on c.idClient = a.Client_idClient
group by Client_idClient;

