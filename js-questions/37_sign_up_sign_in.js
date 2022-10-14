/**
 * a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
 * b. Create a function called signIn which allows user to sign in to the application
 */
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

function signUp(obj) {
  let userCheck = false;
  users.forEach((user) => {
    if (user.email == obj.email) {
      return (userCheck = true);
    }
  });

  if (userCheck) {
    console.log(`You have already an account.`);
  } else {
    let userUniqueID = uniqueID(users);
    let createdTime = dateCreate();
    obj._id = userUniqueID;
    obj.createdAt = createdTime;
    obj.isLoggedIn = false;
    users.push(obj);
    console.log("You have successfully created an account!");
  }
}
function signIn(obj) {
  let userCheck = false;
  users.forEach((user, index) => {
    if (user.email == obj.email && user.password == obj.password) {
      users[index].isLoggedIn = true;
      return (userCheck = true);
    }
  });
  if (userCheck) {
    console.log("You have logged in to the application");
  } else {
    console.log(`Wrong password or email`);
  }
}

signUp({ username: "Alex", email: "alex@alex.com", password: "123123" });
signUp({ username: "Alex", email: "alex@alexrage.com", password: "123123" });

signIn({ username: "Alex", email: "alex@alexrageton.com", password: "123123" });
signIn({ username: "Alex", email: "alex@alexrage.com", password: "123123" });
signIn({ username: "Alex", email: "alex@alex.com", password: "12313" });
signIn({ username: "Alex", email: "alex@ale.com", password: "12313" });
signIn({ username: "Alex", email: "alex@alex.com", password: "123123" });

console.log(users);

function uniqueID(users) {
  let _id = Math.round(Math.random() * 1000000);
  for (let i = 0; i < users.length; i++) {
    if (users[i]._id == _id) {
      uniqueID();
    }
  }
  return `${_id}`;
}

function dateCreate() {
  let exportDate = "";
  let date = new Date();
  let ampm = "AM";

  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();

  if (currentHours >= 12) {
    ampm = "PM";
    switch (currentHours) {
      case 13:
        currentHours = 1;
        break;
      case 14:
        currentHours = 2;
        break;
      case 15:
        currentHours = 3;
        break;
      case 16:
        currentHours = 4;
        break;
      case 17:
        currentHours = 5;
        break;
      case 18:
        currentHours = 6;
        break;
      case 19:
        currentHours = 7;
        break;
      case 20:
        currentHours = 8;
        break;
      case 21:
        currentHours = 9;
        break;
      case 22:
        currentHours = 10;
        break;
      case 23:
        currentHours = 11;
        break;
      case 24:
        currentHours = 12;
        break;

      default:
        currentHours = currentHours;
        break;
    }
  }
  exportDate = `${date.toLocaleDateString()} ${
    currentHours < 10 ? "0" + currentHours : currentHours
  }:${currentMinutes < 10 ? "0" + currentMinutes : currentMinutes} ${ampm}`;

  return exportDate;
}
