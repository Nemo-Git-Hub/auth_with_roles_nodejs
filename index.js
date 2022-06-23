// -= index.js =-

const express = require('express') // импортировали экспресс
const mongoose = require('mongoose')
const authRouter = require('./authRouter') // импортировали созданный объект роутера
const PORT = process.env.PORT || 5000

const app = express() // создали приложение из экспортированной функции (наш сервер)

app.use(express.json()) // чтобы сервер мог парсить json, который будет прилетать нам в запросах
app.use("/auth", authRouter) // определим маршруты, по кот эти запросы будут отправляться. Создаем файл authRouter.js,
// затем, чтобы наше приложение прослушивало этот роутер, вызываем функцию use, (1м параметром передаем url по кот этот
// роутер будет слушаться - "/auth", и 2м парам передаем сам роутер - authRouter).
// Теперь создадим файл authController.js

const start = async () => { // все операции с БД асинхронны, поэтому используем async - await
  try {
		await mongoose.connect(`mongodb+srv://qwerty:qwerty123@cluster0.hrsff.mongodb.net/auth_roles?retryWrites=true&w=majority`) // подключили БД
		app.listen(PORT, () => console.log(`server started on port ${PORT}`)) // запустили сервер
  } catch (e) {
	  console.log(e)
  }
}

start()

// -= index.js =-