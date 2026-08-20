"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useDebounce } from "../../hooks/useDebounce";
import { fetchDeals } from "../../services/dealService";
import { Search, SlidersHorizontal, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Deals() {
  const [search,setSearch]=useState(""); const debounced=useDebounce(search);
  const [industry,setIndustry]=useState("All"); const [risk,setRisk]=useState("All"); const [sort,setSort]=useState("roi");
  const [page,setPage]=useState(1); const [state,setState]=useState({data:[],total:0,loading:true,error:false});
  useEffect(()=>{setPage(1)},[debounced,industry,risk,sort]);
  useEffect(()=>{let live=true; setState(s=>({...s,loading:true,error:false}));
  fetchDeals({search:debounced,industry,risk,sort,page,pageSize:9}).then(x=>live&&setState({...x,loading:false,error:false})).catch(()=>live&&setState({data:[],total:0,loading:false,error:true})); 
  return()=>{live=false}},[debounced,industry,risk,sort,page]);


  const pages=Math.max(1,Math.ceil(state.total/9));
  return <div className="app-shell">
    <Sidebar/><main className="main"><Header title="Deal Explorer" subtitle="Fast discovery across 72 simulated opportunities with investor-grade filters."/>
    <div className="filterbar">
    <div className="searchbox"><Search size={17}/>
    <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search company, city or industry..."/></div>
    <select value={industry} onChange={e=>setIndustry(e.target.value)}><option>All</option>{["Clean Energy","Semiconductor","FinTech","Healthcare","Logistics","Agritech","Robotics","Infrastructure"].map(x=><option key={x}>{x}</option>)}</select><select value={risk} onChange={e=>setRisk(e.target.value)}><option>All</option><option>Low</option><option>Medium</option><option>High</option></select><select value={sort} onChange={e=>setSort(e.target.value)}><option value="roi">Sort: ROI</option><option value="investment">Sort: Ticket</option><option value="risk">Sort: Risk</option></select><SlidersHorizontal size={17}/></div>
    {state.loading?<div className="loading">Refreshing simulated market data…</div>:state.error?<div className="empty">The simulated service is unavailable. Refresh to retry.</div>:state.data.length===0?<div className="empty">No deals match these filters.</div>:<div className="deal-grid">{state.data.map(d=><Link href={`/deals/${d.id}`} className="deal-card" key={d.id}><div className="deal-top"><span className="tag">{d.risk} risk</span><span>{d.city}</span></div><h3>{d.company}</h3><p>{d.industry}</p><div className="deal-values"><div><small>Projected ROI</small><b>{d.roi}%</b></div><div><small>Ticket size</small><b>₹{(d.investment/100000).toFixed(0)}L</b></div><ArrowUpRight size={18}/></div><div className="progress"><span style={{width:`${d.funded}%`}}/></div><small>{d.funded}% funded</small></Link>)}</div>}
    <div className="pagination"><button disabled={page===1} onClick={()=>setPage(p=>p-1)}><ChevronLeft/></button><span>Page {page} / {pages}</span><button disabled={page===pages} onClick={()=>setPage(p=>p+1)}><ChevronRight/></button></div>
  </main></div>
}
