import React, { useContext } from "react";
import { CountContext } from "../Context/CountContext";

export default function useCount() {
  const { count, setCount } = useContext(CountContext);
  return { count, setCount };
}
