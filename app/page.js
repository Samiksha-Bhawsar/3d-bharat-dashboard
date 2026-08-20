"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Dashboard from "../components/Dashboard";
import { hydrate } from "../store/store";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => { try { dispatch(hydrate(JSON.parse(localStorage.getItem("3d-bharat-investments") || "[]"))); } catch {} }, [dispatch]);
  return <Dashboard/>;
}
