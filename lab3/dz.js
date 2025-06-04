// Напишите функцию plainify, которая получает на вход обычный объект c вложенными свойствами, а возвращает plain-объект
function plainify(obj, parentKey = '', result = {}) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                plainify(obj[key], newKey, result);
            } else {
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}

const nestedObj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        }
    },
    g: [5, 6]
};

console.log(plainify(nestedObj));
