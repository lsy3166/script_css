// const promise = new Promise((resolve, reject) => {
//   console.log("doing something");
//   setTimeout(() => {
//     resolve("resolve lsy");
//     reject(new Error("network error!!"));
//   }, 1000);
// });

// promise
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finally"));

// promise
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });

const getEgg = (hen) => {
  return new Promise((resolve, reject) =>
    //setTimeout(() => resolve(`${hen} => ⚪`), 1000)
    setTimeout(() => reject(new Error(`${hen} => ⚪`)), 1000)
  );
};

const cook = (egg) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(`${egg} => 🍳`), 1000)
  );
};

// getHen()
//   .then((hen) => getEgg(hen))
//   .catch((error) => "🍞")
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal))
//   .catch(console.log);

// async
async function fetchUser() {
  return "lsy async promise";
}

// const user = fetchUser();
// user.then(console.log);
// console.log(user);

// await
function delay(timeout) {
  return new Promise((resolve, reject) => setTimeout(() => resolve(), timeout));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(2000);
  return "🍌";
}

async function pickFruits() {
  //   return getApple().then((apple) => {
  //     return getBanana().then((banana) => `${apple} + ${banana}`);
  //   });

  // 병렬로 처리할 경우, promise 생성 후 각각 처리
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// useful api - all
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);
{
  function funcHello(arg) {
    alert("Hello " + arg);
  }
  function customAlert(value, func) {
    func(value);
  }

  // customAlert("World!!", funcHello);
}
