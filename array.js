// This is our data variable, treat it with care!
const cyberData = [
  {
    Level: "Entry-level",
    LocalJobOpenings: 3567,
    AvailableTalent: 50,
  },
  {
    Level: "Mid-level",
    LocalJobOpenings: 9558,
    AvailableTalent: 30,
  },
  {
    Level: "Senior-level",
    LocalJobOpenings: 13432,
    AvailableTalent: 10,
  },
];

// Grab the combined total of role openings
const totalOpenRoles = cyberData.reduce((total, job) => total + job.LocalJobOpenings, 0);

// Display to our user in console
cyberData.forEach((job) => {
  // For each 'role' in the table...
  console.log(`${job.Level}: ${job.LocalJobOpenings} openings`); // ... display how many openings there are.
});

// Total open roles
console.log(`There is a combined total of ${totalOpenRoles} open roles.`);

// Find our largest shortage by cycling through our current list
function findLargestShortage() {
  // If we wanted to improve this, work with reduce. But that's a PAIN for me to
  // do right now. It'll work for demonstration!
  let largest = Math.max(
    cyberData[0].LocalJobOpenings,
    cyberData[1].LocalJobOpenings,
    cyberData[2].LocalJobOpenings
  );
  let role = cyberData.find(item => item.LocalJobOpenings === largest).Level;
  return `The role with the largest shortage is ${role} with ${largest} job openings.`;
}
console.log(findLargestShortage(cyberData));