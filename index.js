exports.handler = async (event) => {
  let data = 1;
  const data2 =              2

  data = 2;
  data.a.b = 3;
  
  console.log(data);
        console.log(event);
};

function hello(x) {
  console.log(x);
}