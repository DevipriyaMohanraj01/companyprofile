import React from "react";

const ProfileOutput = ({ data }) => {
  if (!data) return null;

  const { companyProfile, individualProfile } = data;

  return (
    <div>
      <h2>Company Profile</h2>
      <ul>
        <li><strong>Size:</strong> {companyProfile.size}</li>
        <li><strong>Locations:</strong> {companyProfile.locations.join(", ")}</li>
        <li><strong>Industry:</strong> {companyProfile.industry}</li>
        <li><strong>Services:</strong> {companyProfile.services.join(", ")}</li>
        <li><strong>Recent News:</strong> {companyProfile.recentNews}</li>
      </ul>

      <h2>Individual Profile</h2>
      <ul>
        <li><strong>Position:</strong> {individualProfile.position}</li>
        <li><strong>Decision Maker:</strong> {individualProfile.decisionMaker ? "Yes" : "No"}</li>
        <li><strong>Joined:</strong> {individualProfile.joined}</li>
        <li><strong>Previous Orgs:</strong> {individualProfile.previousOrgs.join(", ")}</li>
      </ul>
    </div>
  );
};

export default ProfileOutput;
