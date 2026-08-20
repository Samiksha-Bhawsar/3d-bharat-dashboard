"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { fetchDealById } from "../../../services/dealService";
import { GrowthChart } from "../../../components/Charts";
import { ArrowLeft, Bookmark, Building2, ShieldCheck, TrendingUp, Check } from "lucide-react";

export default function DealDetails() {
  const {id}=useParams(); const [deal,setDeal]=useState(null); const [saved,setSaved]=useState(false);
  useEffect(()=>{if(id) fetchDealById(id).then(d=>{setDeal(d); try{setSaved(JSON.parse(localStorage.getItem("3d-bharat-investments")||"[]").includes(id))}catch{}})},[id]);
  function toggleSave(){let ids=[];try{ids=JSON.parse(localStorage.getItem("3d-bharat-investments")||"[]")}catch{} const next=saved?ids.filter(x=>x!==id):[...new Set([...ids,id])]; localStorage.setItem("3d-bharat-investments",JSON.stringify(next)); setSaved(!saved)}
  if(!deal) return <div className="app-shell"><Sidebar/><main className="main"><Header title="Deal details" subtitle="Loading simulated company intelligence…"/><div className="loading">Loading deal…</div></main></div>;
  return <div className="app-shell"><Sidebar/><main className="main"><Header title={deal.company} subtitle={`${deal.industry} · ${deal.city} · ${deal.id}`}/>
    <Link href="/deals" className="back"><ArrowLeft size={15}/> Back to explorer</Link>
    <section className="detail-hero"><div><span className="eyebrow"><span/> {deal.status.toUpperCase()}</span><h2>{deal.company}</h2><p>{deal.description}</p></div><button className="btn primary" onClick={toggleSave}>{saved?<Check size={17}/>:<Bookmark size={17}/>} {saved?"Saved": "Save interest"}</button></section>
    <div className="metric-grid"><Metric icon={<TrendingUp/>} label="Projected ROI" value={`${deal.roi}%`} delta="5-year view" tone="c"/><Metric icon={<ShieldCheck/>} label="Risk profile" value={deal.risk} delta="Model assessment" tone="d"/><Metric icon={<Building2/>} label="Revenue" value={`₹${deal.revenue}L`} delta={`+${deal.growth}% YoY`} tone="b"/></div>
    <section className="detail-grid"><div className="panel"><div className="panel-head"><div><h3>ROI projection</h3><p>Scenario model</p></div></div><GrowthChart/></div><div className="panel"><h3>Risk analysis</h3><div className="risk-meter"><span className={deal.risk.toLowerCase()}></span></div><p className="muted">The recommendation model weighs risk, industry alignment, budget fit and ROI attractiveness using the local dataset.</p><div className="analysis-row"><span>Risk match</span><b>{deal.risk==="Low"?"92":"74"}%</b></div><div className="analysis-row"><span>Industry momentum</span><b>{Math.min(98,70+Math.round(deal.growth))}%</b></div></div></section>
  </main></div>
}
function Metric({icon,label,value,delta,tone}) { return <div className={`metric tone-${tone}`}><div className="metric-icon">{icon}</div><div><span>{label}</span><strong>{value}</strong><small>{delta}</small></div></div> }
