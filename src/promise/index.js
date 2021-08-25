const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!')
    } else {
      reject('Whooops!')
    }
  })
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(error => console.error(error))

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True')
      }, 2000);
    } else {
      const error = new Error ('Whooops!') //muestra un trace error
      reject(error)
    }
  })
}

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(error => console.error(error))

/*
  Promise.all() podemos llamar varias promesas
*/
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(responses => console.log('Array of results', responses))
  .catch(error => console.error(error))