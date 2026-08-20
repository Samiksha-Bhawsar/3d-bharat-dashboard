"use client";
import { motion } from "framer-motion";

export default function IndiaVisual() {
  const nodes = [
    ["PUNE", "₹18.4Cr", "n1"], ["MUMBAI", "LOW RISK", "n2"], ["BENGALURU", "24.8% ROI", "n3"], ["HYDERABAD", "85% FUNDED", "n4"],
  ];
  return <div className="india-scene">
    <div className="scene-grid"/>
    <motion.div className="orbit orbit-a" animate={{rotate:360}} transition={{duration:24,repeat:Infinity,ease:"linear"}}/>
    <motion.div className="orbit orbit-b" animate={{rotate:-360}} transition={{duration:18,repeat:Infinity,ease:"linear"}}/>
    <div className="scene-glow glow-a"/><div className="scene-glow glow-b"/>
    <motion.div className="bharat-core" animate={{rotateY:[-8,8,-8], rotateX:[3,-3,3], y:[0,-7,0]}} transition={{duration:7,repeat:Infinity,ease:"easeInOut"}}>
      <div className="core-topline"><span>MARKET PULSE</span><b>72 ACTIVE</b></div>
      <div className="triangle-stack"><div className="tri tri-one"/><div className="tri tri-two"/><div className="tri tri-three"/><div className="bharat-word">भारत</div></div>
      <div className="core-bottom"><span>Capital map</span><b>₹126.4 Cr</b></div>
    </motion.div>
    {nodes.map(([city,value,cls],i) => <motion.div key={city} className={`map-node ${cls}`} animate={{y:[0,-5,0]}} transition={{duration:2.5+i*.4,repeat:Infinity,ease:"easeInOut"}}><i/><div><b>{city}</b><span>{value}</span></div></motion.div>)}
    <div className="scene-legend"><span><i/> 3D activity</span><span><i/> Risk signal</span><span><i/> ROI flow</span></div>
  </div>;
}
