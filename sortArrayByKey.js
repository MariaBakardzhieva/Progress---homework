function sortArrayByKey(arr, key) {
    return arr.slice().sort((a, b) => {
        // Compare the values of the specified key in each object
        const valueA = a[key];
        const valueB = b[key];

        // Use localeCompare for strings, and regular comparison for other types
        if (typeof valueA === "string") {
            return valueA.localeCompare(valueB);
        } else {
            return valueA - valueB;
        }
    });
}

// TEST CASE (do not modify):
console.log(sortArrayByKey(todos, "priority"));

// EXPECTED OUTPUT:
// [
//   { title: 'Todo3', completed: true, priority: 'high' },
//   { title: 'Todo5', completed: false, priority: 'high' },
//   { title: 'Todo1', completed: true, priority: 'low' },
//   { title: 'Todo2', completed: false, priority: 'low' },
//   { title: 'Todo6', completed: true, priority: 'low' },
//   { title: 'Todo4', completed: true, priority: 'medium' }
// ]