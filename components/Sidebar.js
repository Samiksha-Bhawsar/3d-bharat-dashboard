"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LayoutDashboard, Search, BriefcaseBusiness, Building2, Sun, Moon, Palette, MapPinned, ChevronDown } from "lucide-react";

const themes = [
  { id: "tricolor", label: "Tricolor", a: "#ff7a18", b: "#10b981", c: "#2563eb" },
  { id: "aurora", label: "Aurora", a: "#8b5cf6", b: "#06b6d4", c: "#22c55e" },
  { id: "royal", label: "Royal", a: "#ec4899", b: "#8b5cf6", c: "#f59e0b" },
];

export default function Sidebar() {
  const [dark, setDark] = useState(true);
  const [theme, setTheme] = useState("tricolor");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("bharat-mode");
    const savedTheme = localStorage.getItem("bharat-theme");
    const nextDark = savedMode !== "light";
    const nextTheme = themes.some(t => t.id === savedTheme) ? savedTheme : "tricolor";
    setDark(nextDark); setTheme(nextTheme);
    document.documentElement.dataset.mode = nextDark ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleMode() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.mode = next ? "dark" : "light";
    localStorage.setItem("bharat-mode", next ? "dark" : "light");
  }

  function chooseTheme(id) {
    setTheme(id); setOpen(false);
    document.documentElement.dataset.theme = id;
    localStorage.setItem("bharat-theme", id);
  }

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark"><MapPinned size={20}/></div>
        <div><b>3D Bharat</b><small>Capital Intelligence</small></div>
      </div>
      <div className="side-label">WORKSPACE</div>
      <nav>
        <Link href="/"><LayoutDashboard size={18}/> Overview</Link>
        <Link href="/deals"><Search size={18}/> Deal Explorer</Link>
        <Link href="/investments"><BriefcaseBusiness size={18}/> My Investments</Link>
        <Link href="/corporate"><Building2 size={18}/> Corporate</Link>
      </nav>
      <div className="sidebar-bottom">
        <div className="theme-picker">
          <button className="theme-btn" onClick={() => setOpen(v => !v)}><Palette size={16}/> Color system <ChevronDown size={14} className={open ? "flip" : ""}/></button>
          {open && <div className="theme-menu">{themes.map(t => <button key={t.id} onClick={() => chooseTheme(t.id)}><span className="theme-triangle" style={{"--a":t.a,"--b":t.b,"--c":t.c}}/><span>{t.label}</span><i className={theme === t.id ? "active-dot" : ""}/></button>)}</div>}
        </div>
        <button className="theme-btn mode-btn" onClick={toggleMode}>{dark ? <Sun size={16}/> : <Moon size={16}/>} {dark ? "Light mode" : "Dark mode"}</button>
        <div className="side-status"><span className="live-dot"/> Simulated data layer <b>LIVE</b></div>
      </div>
    </aside>
  );
}
