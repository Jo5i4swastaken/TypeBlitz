import svgPaths from "./svg-povb633xz2";

function Group() {
  return (
    <div className="absolute contents left-[72px] top-[20px]">
      <div className="absolute flex h-[30px] items-center justify-center left-[72px] top-[20px] w-[31.601px]" style={{ "--transform-inner-width": "30", "--transform-inner-height": "31.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[31.601px] relative w-[30px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 32">
              <g id="Vector">
                <path d={svgPaths.p1e7baa00} fill="#FFE677" />
                <path d={svgPaths.p18cdcc80} fill="#FFD000" />
                <path d={svgPaths.p21dead80} fill="var(--fill-0, #D8B000)" />
                <path d={svgPaths.p2d06b900} fill="#A27528" />
                <path d={svgPaths.p217de600} fill="#FFF5C9" />
                <path d={svgPaths.p3d706980} fill="#FFDE4D" />
                <path d={svgPaths.p2e6ece00} fill="var(--fill-0, #D8B000)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <p className="absolute font-['Lexend:Bold',sans-serif] font-bold leading-[normal] left-[115px] text-[14px] text-nowrap text-white top-[26px] whitespace-pre">KeyFlare</p>
    </div>
  );
}

function Bolt() {
  return (
    <div className="absolute left-[208px] size-[20px] top-[25px]" data-name="bolt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="bolt">
          <path d={svgPaths.p15015780} id="Vector" stroke="var(--stroke-0, #E5E4DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p20d10600} id="Vector_2" stroke="var(--stroke-0, #E5E4DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[72px] top-[20px]">
      <Group />
      <Bolt />
    </div>
  );
}

function Config() {
  return (
    <div className="absolute contents left-[72px] top-[20px]" data-name="config">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[331px] top-[366px]">
      <div className="absolute bg-[#ffde4d] h-[20px] left-[331px] top-[366px] w-[2px]" />
    </div>
  );
}

function Test() {
  return (
    <div className="absolute contents left-[322px] top-[359px]" data-name="test">
      <p className="absolute font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] left-[640.5px] text-[#8a8a8a] text-[25px] text-center top-[359px] translate-x-[-50%] w-[637px]">abraza el caos, pues el orden es solo una ilusión a la espera de ser desgarrada por la pasión.</p>
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[322px] top-[263px]">
      <Test />
      <p className="absolute font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] left-[640.5px] text-[#ffde4d] text-[50px] text-center text-nowrap top-[263px] translate-x-[-50%] whitespace-pre">0:30s</p>
    </div>
  );
}

export default function Clock() {
  return (
    <div className="bg-[#323437] overflow-clip relative rounded-[20px] size-full" data-name="Clock">
      <Config />
      <Group3 />
    </div>
  );
}