/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const me = {
    name: 'Kate',
    surname: 'Kostina-Posikra',
    favoriteNumber: '5',
}
console.log(`My name is ${me.name} ${me.surname} and my favorite number is ${me.favoriteNumber}`)

delete me.favoriteNumber