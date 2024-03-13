let usernames: string[] = ["Jane", "Alex", "Eric", "Juliet", "Admin"];
for (let user of usernames)
  if (user === "Admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${usernames}, thank you for logging in again.`);
  }
