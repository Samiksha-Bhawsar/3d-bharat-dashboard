"use client";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import deals from "../../data/deals.json";
import Link from "next/link";
import { Bookmark, Trash2, ArrowUpRight } from "lucide-react";
export default function Investments() {
  const [ids,setIds]=useState([]);
  useEffect(()=>{try{setIds(JSON.parse(localStorage.getItem("3d-bharat-investments")||"[]"))}catch{}},[]);
  function remove(id){const next=ids.filter(x=>x!==id);setIds(next);localStorage.setItem("3d-bharat-investments",JSON.stringify(next))}
  const saved=deals.filter(d=>ids.includes(d.id));
  return <div className="app-shell"><Sidebar/><main className="main"><Header title="My Investments" subtitle="Your locally persisted shortlist — private, fast and backend-free."/>
    {saved.length===0?<div className="empty"><Bookmark size={22}/><h3>No saved interests yet</h3><p>Open Deal Explorer and save opportunities you want to track.</p><Link href="/deals" className="btn primary">Explore deals</Link></div>:<div className="saved-list">{saved.map(d=><div className="saved-row" key={d.id}><div><b>{d.company}</b><small>{d.industry} · {d.city}</small></div><div><strong>{d.roi}%</strong><small>Projected ROI</small></div><div className="saved-actions"><Link href={`/deals/${d.id}`}><ArrowUpRight size={16}/></Link><button onClick={()=>remove(d.id)}><Trash2 size={16}/></button></div></div>)}</div>}
  </main></div>
}
