import React from "react";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const naviagte = useNavigate();
  return (
    <>
      <div>Order Confirmed!</div>
      <button onClick={() => naviagte("/")}>Back to Home</button>
    </>
  );
};
