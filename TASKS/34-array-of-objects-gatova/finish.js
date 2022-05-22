/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const sharuZaCar = [
    {
        carBrand: 'Mazda',
        price: 21,
        isAvailableForSale: false
    },
    {
        carBrand: 'Xui',
        price: 1000,
        isAvailableForSale: true
    },
    {
        carBrand: 'Assboddy',
        price: 100000,
        isAvailableForSale: true
    }
]

sharuZaCar.push(
    {
        carBrand: 'Susperma',
        price: 2657567,
        isAvailableForSale: false
    }
)
console.log(sharuZaCar)