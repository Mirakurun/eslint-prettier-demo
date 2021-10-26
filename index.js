const func = arg => {
  console.log(arg);
};

function output(x) {
  if (x) {
    return x;
  } else {
    return 'no arg';
  }
}

function promise(x) {
  return new Promise(function(resolve, reject) {
    if (x) {
      resolve(x);
    }
    reject('something bad happened');
  });
}

exports.handler = async (event) => {
  // console.log(event);

  let data;
  data.a.b = 3;
  console.log(data);

  const doubleQuotes = "double";
  console.log(doubleQuotes);

  const unusedVar = 5;

  const z = x;

  const hello = 'hello';
  const concat = h + 'world';
  console.log(concat);

  const missingSemiColon = 'a'
  console.log(missingSemiColon);

  const indent =              1;
            console.log(indent);

  const trailingComma = {
    a: 1,
    b: 2,
    c: 3
  };

  if(data){
    console.log('hi');
  }

  log('x');
  func('hi');
  output(5);
  const p = await promise();
  console.log(p);
};

function log(x) {
  console.log(x);
}
