// Data Const
const cyberData = [
  {
    Level: "Entry-level",
    LocalJobOpenings: 15,
    AvailableTalent: 50,
  },
  {
    Level: "Mid-level",
    LocalJobOpenings: 10,
    AvailableTalent: 30,
  },
  {
    Level: "Senior-level",
    LocalJobOpenings: 5,
    AvailableTalent: 10,
  },
];

// Displaying it
cyberData.forEach(role => { // For each 'role' in the table...
    console.log(`${role.Level}: ${role.LocalJobOpenings} openings`); // ... display how many openings there are.
});
console.log("I don't know what you wanted me to 'calculate'.")