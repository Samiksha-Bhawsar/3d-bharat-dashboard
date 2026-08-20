"use client";
import { useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, ShieldCheck, Wallet, Activity, Gauge, Zap, ArrowRight } from "lucide-react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import IndiaVisual from "./IndiaVisual";
import { GrowthChart, IndustryChart, RiskChart } from "./Charts";
import deals from "../data/deals.json";

export default function Dashboard() {
  const active = useMemo(() => deals.filter(d=>d.status==="Active").length, []);
  const avgRoi = useMemo(() => (deals.reduce((s,d)=>s+d.roi,0)/deals.length).toFixed(1), []);
  return <div className="app-shell"><Sidebar/><main className="main"><Header title="Investor Overview" subtitle="A high-signal view of simulated private-market activity across Bharat."/>
    <section className="hero-grid">
      <div className="hero-copy"><div className="eyebrow"><span/> NATIONAL DEAL INTELLIGENCE</div><h2>Turn market signals into <em>conviction.</em></h2><p>Explore a simulated investment universe spanning clean energy, semiconductor, fintech, healthcare and infrastructure — built for fast decisions and clear risk visibility.</p><div className="hero-actions"><Link href="/deals" className="btn primary">Explore deals <ArrowUpRight size={17}/></Link><Link href="/investments" className="btn ghost">Open portfolio <ArrowRight size={15}/></Link></div><div className="hero-stats"><span><b>72</b> Deals tracked</span><span><b>14</b> Investors</span><span><b>{avgRoi}%</b> Avg ROI</span></div></div>
      <IndiaVisual/>
    </section>
    <section className="metric-grid">
      <Metric icon={<Wallet/>} label="Total Investments" value="₹48.6 Cr" delta="+18.4%" tone="a" />
      <Metric icon={<Activity/>} label="Active Deals" value={active} delta="+7 this month" tone="b" />
      <Metric icon={<TrendingUp/>} label="ROI Overview" value={`${avgRoi}%`} delta="+3.2 pts" tone="c" />
      <Metric icon={<ShieldCheck/>} label="Low-risk share" value="42%" delta="Healthy mix" tone="d" />
    </section>
    <section className="signal-strip"><div><Gauge size={18}/><span>Portfolio health <b>82 / 100</b></span></div><div><Zap size={18}/><span>Best momentum <b>Clean Energy</b></span></div><div><span>Service latency</span><b>300–800ms simulated</b></div></section>
    <section className="chart-grid">
      <div className="panel wide"><PanelHead title="Investment growth" sub="₹ crore · rolling 7 months" tag="+41.2%"/><GrowthChart/></div>
      <div className="panel"><PanelHead title="Industry mix" sub="Capital allocation"/><IndustryChart/></div>
      <div className="panel"><PanelHead title="Risk vs ROI" sub="Projected return by risk band"/><RiskChart/></div>
    </section>
  </main></div>
}
function PanelHead({title,sub,tag}){return <div className="panel-head"><div><h3>{title}</h3><p>{sub}</p></div>{tag&&<span className="tag">{tag}</span>}</div>}
function Metric({icon,label,value,delta,tone}) { return <div className={`metric tone-${tone}`}><div className="metric-icon">{icon}</div><div><span>{label}</span><strong>{value}</strong><small>{delta}</small></div></div> }
