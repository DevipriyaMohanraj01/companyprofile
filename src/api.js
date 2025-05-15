export const callGeminiAPI = async ({ name, email, companyName, website }) => {
  // Simulate a response delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    companyProfile: {
      size: "100-500 employees",
      locations: ["New York", "London"],
      industry: "Technology",
      services: ["Web Development", "Cloud Solutions"],
      recentNews: "Raised $10M Series A funding in May 2025"
    },
    individualProfile: {
      position: "Software Engineer",
      decisionMaker: false,
      joined: "2023-04-01",
      previousOrgs: ["ABC Tech", "XYZ Solutions"]
    }
  };
};
