// -= middlewaree/roleMiddleware.js =-
// Данный мидлвар дает доступ к той или иной фун только юзерам с определенными ролями

const jwt = require("jsonwebtoken");
const {secret} = require("../config");


module.exports = function (roles) { // воспользуемся ЗАМЫКАНИЕМ и из этой фун вернем еще одну фун, кот будет милваером,
	// а в верхнюю фун мы передадим массив ролей
	return function (req, res, next) {
		if (req.method === "OPTIONS") {
			next()
		}
		
		try {
			const token = req.headers.authorization.split(' ')[1]
			if (!token) {
				return res.status(403).json({message: "Пользователь не авторизован"})
			}
			
			const {roles: userRoles} = jwt.verify(token, secret) // из токена будем получать массив ролей, также декодируем его
			// теперь нужно проверить, есть ли в списке ролей те роли, которые разрешены для этой фун
			let hasRole = false // создадим переменную, кот будет либо false, либо true
			userRoles.forEach(role => { // далее итерируемся с помощью фун forEach по ролям пользователя
				if(roles.includes(role)) { // если массив разрешенных ролей содержит в себе роль, кот есть у пользователя, то
					hasRole = true // меняем значение на true и фун будет разрешена
				} // т.е. мы проверили, содержит ли массив ролей пользователя хоть одну роль разрешенную для данной фун,
				// а эти разрешенные фун мы будем передавать параметром в наш мидлваер в роуте
				if (!hasRole) { // Проверяем: если не встречаем такую роль(т.е. роль не разрешена), то
					return res.status(403).json({message: "У вас нет доступа"}) // возвращаем на клиент ошибку и сообщение
				}
			})
			next() // и дальше переходим к следующему мидлвару
		} catch (e) {
			console.log(e)
			return res.status(403).json({message: "Пользователь не авторизован"})
		}
		
	}
}

// не забываем добавить в роутер импорт этого мидлвара

// -= middlewaree/roleMiddleware.js =-