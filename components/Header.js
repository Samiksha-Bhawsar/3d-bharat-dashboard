"use client";
import { Bell, Search, UserCircle } from "lucide-react";
export default function Header({ title, subtitle }) {
  return <header className="topbar"><div><div className="breadcrumb">3D BHARAT / INVESTOR OS</div><h1>{title}</h1><p>{subtitle}</p></div><div className="top-actions"><div className="search-mini"><Search size={16}/><input placeholder="Quick search"/></div><div className="notification"><Bell size={17}/><span/></div><UserCircle size={29}/></div></header>;
}
