import React, { useState, useEffect } from "react";
import { Typography, Link } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchModel } from "../../lib/fetchModelData";

function UserDetail() {
  const { userId } = useParams(); // Extract userId from route params
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const userData = await fetchModel(`/users/${userId}`);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user detail:', error);
      }
    };

    fetchUserDetail();
  }, [userId]);

  if (!user) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" className="heading">User Detail</Typography>
      <div className="user-detail-container">
        <Typography variant="h5" className="user-name">{user.first_name} {user.last_name}</Typography>
        <Typography className="user-info">Location: {user.location}</Typography>
        <Typography className="user-info">Description: {user.description}</Typography>
        <Typography className="user-info">Occupation: {user.occupation}</Typography>
        <Link href={`/photos/${userId}`} className="view-photos-link">View Photos</Link>
      </div>
    </div>
  );
}

export default UserDetail;
