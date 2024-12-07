import { electionService } from "@/features/elections/instance";

async function seed() {
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

  elections.map(async (election) => await electionService.create(election));
}

seed().then(() => console.log("Elections seeded"))


