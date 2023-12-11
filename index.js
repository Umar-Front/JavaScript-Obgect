

let obj = {
  id: 3,
  name: "Academy"
}

for (i in obj) {
  if (typeof obj[i] === "number") {
    console.log(i, obj[i]);

  }
}

let obj1 = {
  name: "Academy",
  id: 3,
  offline: true,
  online: true,
  individual: false
}

for (i in obj1) {
  if (typeof obj1[i] === "boolean") {
    console.log(i, obj1[i]);

  } else {
    console.log("Sorry we haven't this type");
  }
}


let obj3 = {
  name: "Academy",
  founded: 2022,
  major: "Frontend"
}

for (i in obj3) {
  if (typeof obj3[i] === "string") {
    console.log(`${i}: ${obj3[i]}`);
  }
}

function search(obj3, str) {

  console.log(`name: ${obj3.name}`);
  console.log("name" in obj3);

}
search(obj3, "webbrian")


function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

isEmpty()