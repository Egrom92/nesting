const users = [
    { id: 1, name: "Алексей", gender: 'male', age: 28 },
    { id: 2, name: "Тимофей", gender: 'male', age: 21 },
    { id: 3, name: "Ольга", gender: 'female', age: 35 },
    { id: 4, name: "Виктор", gender: 'male', age: 10 },
    { id: 5, name: "Татьяна", gender: 'female', age: 20 },
    { id: 6, name: "Алексей", gender: 'male', age: 55 },
    { id: 7, name: "Виктор", gender: 'male', age: 34 },
    { id: 8, name: "Татьяна", gender: 'female', age: 24 },
]



function nesting (array, ...fields) {
    const obj = {}

    array.forEach(person => {
        let localObj = null;
        let previousField = null;
        fields.forEach((field, i) => {
            const key = person[field]

            if ( i === 0 ) {
                localObj = obj
                previousField = key
            } else {
                localObj = localObj[previousField]
                previousField = key
            }

            if (i+1 !== fields.length) {
                if (!localObj[key]) {
                    localObj[key] = {}
                }
            } else {
                if (!localObj[key]) {
                    localObj[key] = []
                }
                localObj[key].push(person)
            }
        })
    })

    return obj
}

console.log(nesting(users, 'gender', 'name', 'age'))
