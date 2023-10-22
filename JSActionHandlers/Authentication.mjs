import {addUser, findUserByEmail, updateBalance} from './Users.js';


// Function to authenticate a user
function authenticateUser(email, password) {
    const user = findUserByEmail(email);
    if (user && user.password === password) {
      return user;
    }
    return null; // Authentication failed
  }




// Authenticate a user
const authenticatedUser = authenticateUser('user1@example.com', 'password123');
if (authenticatedUser) {
  console.log(`Authenticated as ${authenticatedUser.email}. Current balance: $${authenticatedUser.balance}`);
} else {
  console.log('Authentication failed.');
}

