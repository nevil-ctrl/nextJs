const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Ali", age: 16 });
  }, 1000);
});

getUser.then((user) => {
  console.log(user.name);
});

const getNumber = new Promise((resolve) => {
  resolve(5);
});

getNumber
  .then((res) => res * 2)
  .then((res) => res + 10)
  .then((res) => {
    console.log(res);
  });
