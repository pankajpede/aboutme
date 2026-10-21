import { useState } from 'react';
import profilePhoto from '../../assets/images/profile-photo.jpeg';
import { Mascot } from '../ui/Mascot';
import kamranDirections from '../../assets/images/avatar/kamran-directions.webp';
import kamranReactions from '../../assets/images/avatar/kamran-reactions.webp';

interface HeroIdBadgeProps {
  mousePos: { x: number; y: number };
}

export function HeroIdBadge({ mousePos }: HeroIdBadgeProps) {
  // Toggle between real profile photo and interactive mascot (default to mascot as requested)
  const [badgeMode, setBadgeMode] = useState<'photo' | 'mascot'>('mascot');

  // Compute 3D rotation angles based on cursor offset (-1 to 1)
  const rotateX = -mousePos.y * 14;
  const rotateY = mousePos.x * 16;

  return (
    <div className="relative flex flex-col items-center justify-start select-none pt-0">
      {/* 01. LANYARD STRAP (Primary Blue Woven Strap - Extends to the very top) */}
      <div className="relative z-10 flex flex-col items-center pointer-events-none">
        {/* Woven Strap Ribbon extending upwards to the top behind header */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-9 sm:w-10 h-[150px] lg:h-[130px] bg-gradient-to-b from-primary via-[#0052a3] to-deep-blue shadow-xs border-x border-white/20 overflow-hidden flex flex-col items-center justify-end pb-2">
          {/* Subtle textured stitching along edges */}
          <div className="absolute inset-y-0 left-[2px] w-[1px] border-l border-dashed border-white/30"></div>
          <div className="absolute inset-y-0 right-[2px] w-[1px] border-r border-dashed border-white/30"></div>
          {/* Repeating signature "P." brand logo along the ribbon */}
          <div className="flex flex-col items-center justify-end gap-7 sm:gap-8 mb-3 select-none">
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className="relative flex items-baseline group font-display text-[12px] text-white/40 leading-none font-bold"
              >
                P<span className="absolute top-[8px] left-[5px] w-1 h-1 rounded-full bg-white/40 inline-block ml-0.5"></span>
              </div>
            ))}
          </div>
        </div>

        {/* Lanyard Metal Clasp Assembly */}
        <div className="flex flex-col items-center -mt-0.5 relative z-20">
          {/* Strap Fold Metal Bar */}
          <div className="w-7 h-1.5 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-xs shadow-xs border-t border-white/50"></div>

          {/* Swivel Cylinder Joint */}
          <div className="w-3 h-3 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 rounded-full shadow-inner border border-slate-500/40 my-[-1px]"></div>

          {/* Lobster Claw Metal Hook */}
          <div className="w-4.5 h-5 rounded-b-md border-[1.5px] border-slate-300 bg-gradient-to-b from-transparent to-slate-400/30 flex items-center justify-center relative shadow-xs">
            {/* Hook latch tongue */}
            <div className="w-0.5 h-3 bg-slate-300 rounded-full shadow-xs"></div>
          </div>
        </div>
      </div>

      {/* 02. BADGE HOLDER WITH 3D TILT EFFECT */}
      <div
        className="relative z-20 transition-transform duration-200 ease-out will-change-transform"
        style={{
          perspective: '1200px',
        }}
      >
        <div
          className="relative transition-transform duration-150 ease-out"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Outer Plastic Card Holder Sleeve (Clear Acrylic with subtle primary blue border) */}
          <div className="relative p-1.5 rounded-[24px] sm:rounded-[26px] bg-white/75 dark:bg-slate-900/50 backdrop-blur-md border border-primary/25 dark:border-white/20">

            {/* Top Lanyard Slot Hole Punch */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-7 h-1.5 rounded-full bg-slate-800/20 border border-white/50 shadow-inner z-30"></div>

            {/* Inner ID Card Body */}
            <div className="w-[250px] bg-white rounded-[18px] overflow-hidden border border-blue-100 flex flex-col text-slate-900 relative">

              {/* Card Header Ribbon in Primary Blue */}
              <div className="bg-primary text-white px-3 py-2 flex items-center justify-between border-b border-blue-700/50">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-white text-primary flex items-center justify-center font-bold text-[9px] tracking-tight">
                    <div
                      className="relative flex items-baseline group font-display text-[12px] tracking-tighter text-primary leading-none font-bold"
                      aria-label="Pankaj Pede Portfolio Home"
                    >
                      P<span className="absolute top-[7px] left-[5px] w-1 h-1 rounded-full bg-primary inline-block ml-0.5"></span>
                    </div>

                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8.5px] font-medium tracking-widest uppercase text-white leading-tight">
                      DESIGNER ID
                    </span>
                    <span className="text-[7.5px] text-blue-100/90 font-normal">
                      STAFF PASS · 2026
                    </span>
                  </div>
                </div>

                {/* Photo / Mascot Switcher Pill */}
                <button
                  type="button"
                  onClick={() => setBadgeMode(prev => prev === 'photo' ? 'mascot' : 'photo')}
                  className="px-1.5 py-0.5 rounded-full bg-black/20 hover:bg-black/30 text-white text-[8px] transition-all border border-white/30 cursor-pointer flex items-center gap-1"
                  title="Click to toggle between Portrait & Avatar"
                >
                  <span className={badgeMode === 'mascot' ? 'text-white font-medium px-1 py-0.2 rounded-full' : 'text-white/70'}>Mascot</span>
                  <span className="text-white/40">|</span>
                  <span className={badgeMode === 'photo' ? 'text-white font-medium px-1 py-0.2 rounded-full' : 'text-white/70'}>Photo</span>
                </button>
              </div>

              {/* Photo Frame Window */}
              <div className="p-2.5 pb-1.5 bg-gradient-to-b from-blue-50/50 to-white">
                <div className="relative w-full aspect-[4/3.8] rounded-lg overflow-hidden">
                  {badgeMode === 'photo' ? (
                    <img
                      src={profilePhoto}
                      alt="Pankaj Pede - Senior Product Designer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-50/30 p-1.5">
                      <Mascot
                        directions={kamranDirections}
                        reactions={kamranReactions}
                        size="100%"
                        className="w-full h-full flex items-center justify-center"
                        label="Pankaj Pede Interactive Badge Mascot"
                      />
                    </div>
                  )}

                  {/* Micro Hologram Security Seal in Bottom Corner */}
                  {/* <div className="absolute bottom-1.5 right-1.5 w-5 h-5 rounded-md bg-gradient-to-tr from-amber-300 via-emerald-300 to-sky-300 opacity-90 border border-white/70 shadow-xs flex items-center justify-center p-0.5 pointer-events-none">
                    <div className="w-full h-full rounded-xs border border-amber-600/30 flex items-center justify-center text-[6.5px] font-bold text-slate-800">
                      UX
                    </div>
                  </div> */}

                  {/* Verified Badge Overlay in Primary Blue */}
                  {/* <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-full bg-primary/95 text-[7.5px] font-bold text-white tracking-widest uppercase flex items-center gap-1 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                    VERIFIED
                  </div> */}
                </div>
              </div>

              {/* Identity & Role Details */}
              <div className="px-3 pt-0.5 pb-1.5 gap-0 flex flex-col items-center text-center">
                <h3 className="font-semibold text-[16px] text-slate-900 mb-0">
                  Pankaj&nbsp;&nbsp;Pede
                </h3>
                <p className="text-[10px] font-medium text-primary tracking-wide leading-tight">
                  Senior Product Designer
                </p>
                {/* <p className="text-[8.5px] text-slate-500 font-medium tracking-tight mt-0.5">
                  UX Strategy & Enterprise Architecture
                </p> */}
              </div>

              {/* Data Specifications Table */}
              {/* <div className="mx-3 py-1 border-t border-dashed border-blue-100 grid grid-cols-2 gap-2 text-[8.5px]">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[7.5px] uppercase font-medium">EXP LEVEL</span>
                  <span className="font-semibold text-slate-800">13+ YEARS</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-slate-400 text-[7.5px] uppercase font-medium">STATUS</span>
                  <span className="font-semibold text-emerald-600 flex items-center justify-end gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    AVAILABLE
                  </span>
                </div>
              </div> */}

              {/* Barcode & Hologram Band at Base */}
              <div className="bg-blue-50/40 px-3 py-1.5 border-t border-blue-100 flex items-center justify-between">
                {/* Barcode graphic lines */}
                <div className="flex items-end gap-[1.5px] h-5 w-28 opacity-80">
                  {[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6].map((height, i) => (
                    <div
                      key={i}
                      className="bg-slate-800 rounded-xs"
                      style={{
                        width: i % 3 === 0 ? '3px' : '1px',
                        height: `${height * 3 + 3}px`,
                      }}
                    />
                  ))}
                </div>

                {/* ID Serial Number */}
                <div className="flex flex-col text-right text-[7.5px] text-slate-500">
                  <span className="font-medium text-primary">IND-2026-UX</span>
                  <span>ISSUE: INDIA</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
