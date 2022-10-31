import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const { userId } = useParams();

  return <div>Details About User {userId}</div>;
};
