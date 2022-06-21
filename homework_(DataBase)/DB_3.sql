//1) Знайти всіх юзерів в кого вік менше за 20
db.getCollection('users').find({age:{$lt:20}})

//2) Знайти всіх юзерів в котрих хоча б один з батьків Tamara або Petro
db.getCollection('users').find(
    {
        $or:[
            {parents:'Tamara'},
            {parents:'Petro'}
        ]
    }
)

//3) Знайти всіх юзерів які вивчають js
db.getCollection('users').find(
    {
       studying:'js'
    }
)

//4) Знайти всіх юзерів котрі вивчають тільки один предмет и додати їм java
db.getCollection('users').updateMany(
    {
       studying:{$size:1}
    },
    {$push:{studying:'java'}}
)

//5) Знайти всіх юзерів номера будинків яких знаходяться в межах 1-20
db.getCollection('users').find(
    {
        $and:[
            {'address.house':{$gte:1}},
            {'address.house':{$lte:20}}
        ]
    }
)

//6) Знайти всіх юзерів в яких назва вулиці містить пробіл
db.getCollection('users').find(
    {
//         'address.street':/.* .*/
        'address.street':/.*\s.*/
    }
)

//7) Видалити всіх юзерів в котрих немає поля studying
db.getCollection('users').deleteMany({studying:null})

//8) Знайти всіх юзерів в котрих в ім'я когось с батьків закінчується на 'na'
db.getCollection('users').find({'parents':/na$/})

//9) Всім юзерам котрі не вивчають python додати його
db.getCollection('users').updateMany(
    {studying:{$ne:'python'}},
    {$push:{studying:'python'}}
)

//10) Посортувати юзерів по рейтингу та по номеру квартири (що то що то, від більшого меншого)
db.getCollection('users').find().sort({rating:-1, 'address.flat':-1})
