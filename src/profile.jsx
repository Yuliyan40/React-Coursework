import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <div style={{ padding: "2rem", fontSize: "2rem" }}>
      {user ? <p>Здравей, {user.name}!</p> : <p>Не си логнат.</p>}
    </div>
  );
};

export default Profile;
