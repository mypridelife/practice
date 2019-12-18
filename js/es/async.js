// function testAwait() {
//   return new Promise(resolve => {
//     setTimeout(function() {
//       console.log("testAwait");
//       resolve();
//     }, 3000);
//   });
// }
// function await2() {
//   setTimeout(() => {
//     console.log("我是谁");
//     return;
//   }, 2000);
// }
// async function helloAsync() {
//   //   await testAwait();

//   await await2();

//   console.log("helloAsync");
// }
// helloAsync();
//准备
function prepare() {
  return new Promise(resolve => {
    setTimeout(function() {
      console.log("prepare chicken");
      resolve();
    }, 500);
  });
}

//炒鸡
function fired() {
  return new Promise(resolve => {
    setTimeout(function() {
      console.log("fired chicken");
      resolve();
    }, 500);
  });
}
//炖鸡
function stewed() {
  return new Promise(resolve => {
    setTimeout(function() {
      console.log("stewed chicken");
      resolve();
    }, 500);
  });
}
//上料
function sdd() {
  return new Promise(resolve => {
    setTimeout(function() {
      console.log("sdd chicken");
      resolve();
    }, 500);
  });
}
//上菜
function serve() {
  return new Promise(resolve => {
    setTimeout(function() {
      console.log("serve chicken");
      resolve();
    }, 500);
  });
}
async function task() {
  console.log("start task");
  await prepare();
  await fired();
  await stewed();
  await sdd();
  await serve();
  console.log("end task");
}
// task();
const wait1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
      console.log("1s later");
    }, 1000);
  });
};

const wait2 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
      console.log("2s later");
    }, 2000);
  });
};
async function test() {
  const a = await wait1();
  const b = await wait2();
  console.log(a);
  console.log(b);
  
  console.log("end");
}
test();
console.log("start");
