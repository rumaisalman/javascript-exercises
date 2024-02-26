const current_users: string[] = ["Admin", "Ahmed", "Amna", "Ayesha", "Aliya"];
const new_users: string[] = ["Admin", "Ahmed", "Fariya", "Zainab", "Fatima"];
function checkUsernames(current_users: string[], new_users: string[]): void {
  //1st step
  const lowercasedCurrentUsers = current_users.map((user) =>
    user.toLowerCase()
  );
  //2nd step
  for (const newUser of new_users) {
    const lowercasedNewUser = newUser.toLowerCase();
    if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
      console.log(
        `Username "${newUser}" is already taken.Please enter a new username.`
      );
    } else {
      console.log(`Username "${newUser}" is available.`);
    }
  }
}
//Testing the function
checkUsernames(current_users, new_users);
