import { electionService } from "@/features/elections/instance";
import { userService } from "@/features/users/instance";

async function seedElectionsAndUsers() {
  const elections = [
    {
      issue: "Wildlife preservation",
      options: [
        "Buy land to extend current reservation",
        "Don't extend current reservation",
        "Outsource responsibility to private actors",
      ],
      status: true,
    },
    {
      issue: "Cats should recieve voting rights",
      options: [
        "Cats can vote from the age of two",
        "Cats will never vote",
        "Cats can vote if the owner is unwell",
        "Cats can vote from the age of four",
      ],
      status: true,
    },
    {
      issue: "New freeway to Arlanda",
      options: ["Yes", "No", "Maybe"],
      status: false,
    },
    {
      issue: "Renovation of Slussen",
      options: [
        "Renovate carefully",
        "Don't renovate",
        "Renovate fully",
        "Tear everything down and rebuild",
      ],
      status: false,
    },
    {
      issue: "Homeless people emancipation act",
      options: ["Homeless people get help", "Homeless people don't get help"],
      status: false,
    },
    {
      issue: "New School in Ulriksdal",
      options: [
        "The school is to be built before 2030 near the railway",
        "Don't build a new school",
        "Build the school in the old Ulriksdal Castle gatekeeper's house",
        "Build out the old school near Järva",
      ],
      status: false,
    },
    {
      issue: "Free admission to museums",
      options: ["Yes", "No"],
      status: false,
    },
    {
      issue: "Make overpass for bikes on Drottningholmsvägen",
      options: [
        "Near Abrahamsberg",
        "Near Stora Mossern",
        "Both near Stora Mossen and Abrahmasberg",
        "Don't build overpass",
      ],
      status: false,
    },
    {
      issue: "New swimming arena on Gärdet",
      options: [
        "Build a simple outdoor arena",
        "Build a large adventure bath",
        "No new arena",
      ],
      status: false,
    },
    {
      issue: "Free cigars for elder citizens",
      options: ["Yes", "No", "Only on weekends and holidays"],
      status: false,
    },
  ];

  const users = [
    {
      name: "Erik Lindros",
      email: "erik.lindros@gmail.com",
      representative: true,
    },
    {
      name: "Karin Zetterström",
      email: "karin.zetterstrom@gmail.com",
      representative: true,
    },
    {
      name: "Bilal Andersson",
      email: "bilal.andersson@gmail.com",
      representative: true,
    },
    {
      name: "Basim Hassan",
      email: "basim.hassan@gmail.com",
      representative: true,
    },
    {
      name: "Love Ericson",
      email: "love.ericson@gmail.com",
      representative: true,
    },
    {
      name: "Trevor Seagrass",
      email: "trevor.seagrass@gmail.com",
      representative: true,
    },
    {
      name: "Lena Erika Ingridsson",
      email: "lei@gmail.com",
      representative: true,
    },
    {
      name: "Shaz Eriser",
      email: "erizer@gmail.com",
      representative: false,
    },
    {
      name: "Knut Angered",
      email: "inte.an@gmail.com",
      representative: false,
    },
    {
      name: "Sven Svensson",
      email: "Svensson@sverige.se",
      representative: false,
    },
    {
      name: "Katarina Björk",
      email: "KB@gmail.com",
      representative: false,
    },
  ];

  await Promise.all(
    elections.map(async (election) => await electionService.create(election))
  );
  await Promise.all(users.map(async (user) => await userService.create(user)));
}

async function seedVoteData() {
  const users = await userService.getAll();
  if (!users) return console.log("Seeding voteData went wrong");

  const filteredUsers = users.filter((user) => user.representative === true);

  const usersId = filteredUsers.map((user) => user.id);

  if (!usersId) return console.log("Seeding voteData went wrong");

  const voteData = [
    {
      votes: 1234,
      option_chosen: 1,
      user_id: usersId[0],
    },
    {
      votes: 1001,
      option_chosen: 2,
      user_id: usersId[1],
    },
    {
      votes: 145,
      option_chosen: 3,
      user_id: usersId[2],
    },
    {
      votes: 456,
      option_chosen: 3,
      user_id: usersId[3],
    },
    {
      votes: 44,
      option_chosen: 2,
      user_id: usersId[4],
    },
    {
      votes: 3456,
      option_chosen: 1,
      user_id: usersId[5],
    },
    {
      votes: 2098,
      option_chosen: 2,
      user_id: usersId[6],
    },
  ];
  voteData.map(async (voteData) => await userService.createVoteData(voteData));
}

async function seed() {
  await seedElectionsAndUsers().then(() =>
    console.log("Elections and Users seeded")
  );
  await seedVoteData().then(() => console.log("VoteData seeded"));
}

seed();
