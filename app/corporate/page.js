"use client";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { GrowthChart, RiskChart } from "../../components/Charts";
import { Users, IndianRupee, Percent, ArrowUpRight } from "lucide-react";
export default function Corporate() {
  return <div className="app-shell"><Sidebar/><main className="main"><Header title="Corporate Dashboard" subtitle="Funding analytics and conversion trends for portfolio companies."/>
    <div className="metric-grid"><Metric icon={<IndianRupee/>} label="Funding raised" value="₹126.4 Cr" delta="+22.8% YoY" tone="a"/><Metric icon={<Users/>} label="Investor count" value="1,284" delta="+146 this quarter" tone="b"/><Metric icon={<Percent/>} label="Conversion rate" value="18.6%" delta="+2.1 pts" tone="c"/><Metric icon={<ArrowUpRight/>} label="Network momentum" value="76" delta="Strong" tone="d"/></div>
    <section className="chart-grid"><div className="panel wide"><div className="panel-head"><div><h3>Funding trend</h3><p>Capital raised across the network</p></div></div><GrowthChart/></div><div className="panel"><div className="panel-head"><div><h3>Conversion benchmark</h3><p>By risk segment</p></div></div><RiskChart/></div></section>
  </main></div>
}
function Metric({icon,label,value,delta,tone}) { return <div className={`metric tone-${tone}`}><div className="metric-icon">{icon}</div><div><span>{label}</span><strong>{value}</strong><small>{delta}</small></div></div> }
