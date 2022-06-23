# profi_auth_nodejs

https://www.youtube.com/watch?v=d_aJdcDq6AY&t=49s


url created:
localhost:5000/auth/registration

index.js - localhost:5000
index.js - app.use("/auth", authRouter)
authRouter.js - router.post('/registration', ...
                router.post('/login', ...
                router.get('/users', ...


npm init -y
npm i express mongoose nodemon bcryptjs express-validator jsonwebtoken


Регистрация пользователей 00:00 - 19:20 \
Авторизация 19:20 - 23:37 \
Получение пользователей 23:37 - 24:25\
Создание мидлваеров пользователей и ролей 24:25 - 

Реализуем логику когда могут обращаться все зарегистрированные пользователи

Как авторизоваться в Postman - 27:40\
когда обращаются пользователи, которые имеют ту или иную роль - 28:20\
как определять доступ по ролям и тестирование - 30:15