const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('async'), 1000)
    : reject(new Error('Test Error'))
  });
}

const doSomething = async() => {
  const something = await doSomethingAsync();
  console.log(something);
}

console.log('Before');
doSomething()
console.log('After')

/*
  Estrucutura de async/await
  con maneja de errores try/catch
*/
const anotherFunction = async() => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch(e) {
    console.error(e)
  }
}

console.log('Before');
anotherFunction()
console.log('After')