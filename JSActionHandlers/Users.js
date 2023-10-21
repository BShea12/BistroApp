const users = [];

// Function to add a new user to the system
function addUser(email, password, initialBalance) {
  const newUser = {
    email: email,
    password: password,
    balance: initialBalance
  };
  users.push(newUser);
  return newUser;
}

// Function to find a user by email
function findUserByEmail(email) {
  return users.find(user => user.email === email);
}

// Function to update the balance of a user
function updateBalance(email, amount) {
  const user = findUserByEmail(email);
  if (user) {
    user.balance += amount;
    return user.balance;
  }
  return null; // User not found
}



// Add a new user
const user1 = addUser('user1@example.com', 'password123', 1000);
const user2 = addUser('user2@example.com', 'abc456', 500);


export {addUser, findUserByEmail, updateBalance};