// const team7Mission = new Promise((resolve, reject) => {
//   // Mission in progress...
//   setTimeout(() => {
//     resolve("Mission Complete! Scroll Retrieved!"); // Success
//   }, 3000);
// });

// team7Mission.then((result) => {
//   console.log(result); // "Mission Complete! Scroll Retrieved!"
// });

// const narutoTask = new Promise((resolve) => {
//   setTimeout(() => resolve("Naruto defeated 5 enemies"), 5000);
// });

// const sasukeTask = new Promise((resolve) => {
//   setTimeout(() => resolve("Sasuke defeated 3 enemies"), 3000);
// });

// const sakuraTask = new Promise((resolve) => {
//   setTimeout(() => resolve("Sakura healed everyone"), 4000);
// });

// Promise.all([narutoTask, sasukeTask, sakuraTask])
//   .then((results) => {
//     console.log("Team 7 Report:");
//     console.log(results);
    // [
    //   "Naruto defeated 5 enemies",
    //   "Sasuke defeated 3 enemies", 
    //   "Sakura healed everyone"
    // ]
//   });

//   const narutoGetsHurt = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Naruto got hurt!"), 2000);
// });

// const sasukeFinishes = new Promise((resolve) => {
//   setTimeout(() => resolve("Sasuke finished!"), 5000);
// });

// Promise.race([narutoGetsHurt, sasukeFinishes])
//   .catch((error) => {
//     console.log(error); // "Naruto got hurt!" (first to complete, even if failure)
//   });

//   const gaaraTeam = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Team 1 failed!"), 2000);
// });

// const shikamaruTeam = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Team 2 failed!"), 3000);
// });

// const narutoTeam = new Promise((resolve) => {
//   setTimeout(() => resolve("Team 7 PASSED! Naruto did it!"), 5000);
// });

// Promise.any([team1Exam, team2Exam, narutoTeam])
//   .then((result) => {
//     console.log(result); // "Team 7 PASSED! Naruto did it!"
//     // We don't care that they finished last, only that they succeeded
//   });

// const narutoMission = new Promise((resolve) => {
//   resolve("Naruto: Completed training ✓");
// });

// const sasukeMission = new Promise((resolve, reject) => {
//   reject("Sasuke: Abandoned training ✗");
// });

// const sakuraMission = new Promise((resolve) => {
//   resolve("Sakura: Did Something ✓");
// });

// Promise.allSettled([narutoMission, sasukeMission, sakuraMission])
//   .then((results) => {
//     console.log("Hokage's Report:");
//     console.log(results);
//     // [
//     //   { status: 'fulfilled', value: 'Naruto: Completed training ✓' },
//     //   { status: 'rejected', reason: 'Sasuke: Abandoned training ✗' },
//     //   { status: 'fulfilled', value: 'Sakura: Completed mission ✓' }
//     // ]
//   });

//   Promise.resolve("Team 7 is legendary! Mission guaranteed success!")
//   .then((result) => {
//     console.log(result); // "Team 7 will succeed no matter what"
//   });

//   Promise.reject("Sakura went alone! Mission Failed!")
//   .catch((error) => {
//     console.log(error); // "Sakura went alone! Mission impossible without team support!"
//   });

const { promise, resolve, reject } = Promise.withResolvers();

console.log("Team 7 called backup teams!");


setTimeout(() => {
  const backupTeams = "Shikamaru, Choji, Kiba, Hinata arrived to help!";
  resolve(`Sasuke retrieval in progress with help: ${backupTeams}`);
}, 2000);

promise.then((result) => {
  console.log(result);
//output
  // "Sasuke retrieval in progress with help: Shikamaru, Choji, Kiba, Hinata arrived to help!"
});