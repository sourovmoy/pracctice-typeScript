// Manually
type User = {
  id: number;   // Optional korte id?: number ;
  name: string;
  email: string;
};
const users: User[] = [];
let lastId: number = 0;

const addUser = (name: string, email: string): User => {
  const user: User = {
    id: lastId++,
    name,
    email,
  };
  users.push(user);
  return user;
};

addUser("Sourov", "sourovDash@gmail.com");
addUser("Sanju", "sanju@gmail.com");
console.log(users);

// BuildIn Method
const addUser2 = (user: Omit<User, "id">): User => {
  const newUser: User = {
    id: lastId++,
    ...user,
  };
  users.push(newUser);
  return newUser;
};

addUser2({ name: "Sourov", email: "sourovDash@gmail.com" });
addUser2({ name: "Sanjubaba", email: "sanjubaba@gmail.com" });
console.log(users);
