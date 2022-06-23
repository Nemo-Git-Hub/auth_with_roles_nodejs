// -= models/Role.js =-
// см. models/User.js

const {Schema, model} = require('mongoose')

const Role = new Schema({
	value: {type: String, unique: true, default: "USER"}, // здесь одно поле value (значение) в нем как раз и будем
	// хранить юзер, админ, модератор, суперадмин, менеджер и т.д. и т.п. По default - user. unique - уникальность, т.е. 2 роли админимстратора, например, быть не может.
})

module.exports = model('Role', Role) // экспортируем в контроллер модель, которая создастся (название модели, схема по которой создана модель)

// Схема того, как выглядят в БД сущность Role