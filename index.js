function myEach(collection, callback) {

    const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection)
    for (let i = 0; i < newCollection.length; i++)
    callback(newCollection[i])

    return collection;
};

function myMap(collection, callback) {
    if (!Array.isArray(collection)) collection = Object.values(collection)

    const newArray = []

    for (let i = 0; i < collection.length; i++)
    newArray.push(callback(collection[i]))

    return newArray
};

function myReduce(collection, callback, acc=0) {
    let copy = [...collection]
    acc = acc || copy.shift();
    for (let accessor in copy) {
        acc = callback(acc, copy[accessor], copy)
    }
    return acc;
  }

function myFind(collection, predicate) {
    let values = Object.values(collection)
    if (collection instanceof Array) {
      values = collection.slice()
    }
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        return values[i]
      }
    }
    return undefined
  };

function myFilter(collection, predicate) {
    let values = Object.values(collection)
    let result = []
    if (collection instanceof Array) {
      values = collection.slice()
    }
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        result.push(values[i])
      }
    }
    return result
  };

function mySize(collection){
    let values = Object.values(collection)
    if (collection instanceof Array) {
      values = collection.slice()
    }
    return values.length
};

function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0]
    }
    return array.slice(0, n)
};

function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1]
    }
    return array.slice(array.length - n, array.length)
};

function myKeys(object) {
    return Object.keys(object)
};

function myValues(object) {
    return Object.values(object)
};
