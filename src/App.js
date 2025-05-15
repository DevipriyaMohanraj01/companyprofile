import React, { useState } from "react";
import Form from "./components/Form";
import ProfileOutput from "./components/ProfileOutput";
import { callGeminiAPI } from "./api";

const App = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (form) => {
    setLoading(true);
    const response = await callGeminiAPI(form);
    setProfileData(response);
    setLoading(false);
  };

  return (
    <div>
      <h1>Company & Individual Profile Generator</h1>
      <Form onSubmit={handleSubmit} />
      {loading ? <p>Loading...</p> : <ProfileOutput data={profileData} />}
    </div>
  );
};

export default App;
