const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const user = [
    //array of objects with username and email
    {
      username: "mary123",
      email: "mary123@aol.com",
    },
    {
      username: "bob123",
      email: "bob123@gmail.com",
    },
    {
      username: "dru456",
      email: "dru456@yahoo.com",
    },
    {
      username: "daisy_dog",
      email: "daisy_is_cute@yahoo.com",
    },
    {
      username: "bryan778",
      email: "bryan778@hotmail.com",
    },
  ];

  const thought = [
    {
      thought: "excited!!",
      username: "mary123",
    },
    {
      thought: "disagree!!",
      username: "bob123",
    },
    {
      thought: "feeling sad!!",
      username: "dru456",
    },
    {
      thought: "couldn't be happier!!",
      username: "daisy_dog",
    },
    {
      thought: "confused!!",
      username: "bryan778",
    },
  ];

  // Add students to the collection and await the results
  await User.collection.insertMany(user);

  // Add courses to the collection and await the results
  await Thought.collection.insertMany(thought);

  // Log out the seed data to indicate what should appear in the database
  console.table(User);
  console.table(thought);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
