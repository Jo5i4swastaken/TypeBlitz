import svgPaths from "./svg-v820573yc5";

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

function MenuConfiguracion() {
  return (
    <div className="absolute content-start flex flex-wrap font-['Roboto_Mono:Light',sans-serif] font-light gap-[10px] items-start leading-[normal] left-[48px] text-[10px] top-[73px] w-[204px]" data-name="menu-configuracion">
      <p className="relative shrink-0 text-[#ffde4d] w-[85px]">Comportamiento</p>
      <p className="relative shrink-0 text-[#8a8a8a] w-[109px]">Umbrales de Prueba</p>
      <p className="relative shrink-0 text-[#8a8a8a] w-[91px]">Tipo de entrada</p>
      <p className="relative shrink-0 text-[#8a8a8a] w-[43px]">Sonidos</p>
      <p className="relative shrink-0 text-[#8a8a8a] w-[61px]">Apariencia</p>
      <p className="relative shrink-0 text-[#8a8a8a] w-[61px]">Temas</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#323437] text-[10px] text-nowrap whitespace-pre">Normal</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Experto</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Maestro</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Dificultad</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#8a8a8a] text-[10px] w-[223px]">Experiencia clásica, puedes corregir errores al escribir.</p>
      <Frame5 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#323437] text-[10px] text-nowrap whitespace-pre">Enter</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Esc</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Tab</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <Frame19 />
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Tipo de reinicio</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#8a8a8a] text-[10px] w-[223px]">Usa Enter para reiniciar o ir a la página de prueba rápidamente.</p>
      <Frame56 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#323437] text-[10px] text-nowrap whitespace-pre">Modo ágil</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Modo ciego</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Modo enfocado</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <Frame57 />
      <Frame58 />
      <Frame59 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Opciones de Modo</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#8a8a8a] text-[10px] w-[223px]">Siempre muestra el historial de la palabra</p>
      <Frame60 />
    </div>
  );
}

function Comportamiento() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Comportamiento">
      <div aria-hidden="true" className="absolute border-[#656669] border-[0px_0px_1px] border-dashed bottom-[-1px] left-0 pointer-events-none right-0 top-0" />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[5px] py-[3px] relative rounded-[3px] shrink-0 w-[67px]">
      <div aria-hidden="true" className="absolute border border-[#656669] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">100</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#323437] text-[10px] text-nowrap whitespace-pre">Apagado</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Personalizado</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame61 />
      <Frame62 />
      <Frame63 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Velocidad Minima</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[#8a8a8a] text-[10px] w-[min-content]">Falla si tu velocidad baja de un límite.</p>
      <Frame10 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[5px] py-[3px] relative rounded-[3px] shrink-0 w-[67px]">
      <div aria-hidden="true" className="absolute border border-[#656669] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">100</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#323437] text-[10px] text-nowrap whitespace-pre">Apagado</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Personalizado</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame64 />
      <Frame65 />
      <Frame66 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Precisión Minima</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[#8a8a8a] text-[10px] w-[min-content]">Falla si tu velocidad baja de un límite.</p>
      <Frame67 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-[230px]">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#323437] text-[10px] text-nowrap whitespace-pre">Desactivado</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Activado</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame68 />
      <Frame69 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Modo de Libertad</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[#8a8a8a] text-[10px] w-[min-content]">Permite eliminar palabras incluso si están bien escritas.</p>
      <Frame14 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#323437] text-[10px] text-nowrap whitespace-pre">Desactivado</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Letra</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Palabra</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame70 />
      <Frame71 />
      <Frame72 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Termina por error</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[#8a8a8a] text-[10px] w-[min-content]">En el modo letra, la prueba se detiene al cometer un error.</p>
      <Frame73 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#323437] text-[10px] text-nowrap whitespace-pre">Desactivado</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Activado</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Caracteres especiales</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[#8a8a8a] text-[10px] w-[min-content]">Permite evitar la validación de caracteres especiales</p>
      <Frame76 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-end relative shrink-0 w-[233px]">
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#323437] text-[10px] text-nowrap whitespace-pre">beep</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">pentatonic</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">pop</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">sine</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">osh</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">square</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">nk creams</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">click</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">sawtooth</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-center flex flex-wrap gap-[10px] items-center relative shrink-0 w-full">
      <Frame77 />
      <Frame78 />
      <Frame79 />
      <Frame6 />
      <Frame80 />
      <Frame81 />
      <Frame82 />
      <Frame83 />
      <Frame84 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] w-full">Sonidos de escritura</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#8a8a8a] text-[10px] w-full">Ajusta el volumen de los sonidos de escritura.</p>
      <Frame85 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="[grid-area:1_/_1] bg-[#656669] box-border content-stretch flex gap-[10px] h-[19px] items-center ml-0 mt-0 px-[10px] py-[3px] relative rounded-[3px] w-[233px]">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">50%</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame86 />
      <div className="[grid-area:1_/_1] bg-[#ffde4d] h-[16px] ml-[84px] mt-[2px] rounded-[5px] w-[64px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[233px]">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Volumen de sonido</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[#8a8a8a] text-[10px] w-[min-content]">Ajusta el volumen de los sonidos de escritura.</p>
      <Group2 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#323437] text-[10px] text-nowrap whitespace-pre">texto</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Barra</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Miniatura</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame87 />
      <Frame88 />
      <Frame89 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Estilo del contador</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[#8a8a8a] text-[10px] w-[min-content]">Modifica la apariencia del contador de palabras durante la prueba.</p>
      <Frame90 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="[grid-area:1_/_1] bg-[#656669] box-border content-stretch flex gap-[10px] h-[19px] items-center ml-0 mt-0 px-[10px] py-[3px] relative rounded-[3px] w-[233px]">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">20px</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame92 />
      <div className="[grid-area:1_/_1] bg-[#ffde4d] h-[16px] ml-[84px] mt-[2px] rounded-[5px] w-[64px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Tamaño de fuente</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[#8a8a8a] text-[10px] w-[min-content]">Cambia el tamaño de fuente de las palabras de la prueba.</p>
      <Group3 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0 w-[90px]">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#323437] text-[10px] text-nowrap whitespace-pre">Roboto mono</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0 w-[90px]">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-center w-[70px]">Atkinson</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0 w-[90px]">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-center w-[90px]">Hyperlegible</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0 w-[90px]">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-center w-[90px]">Fira Code</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-center flex flex-wrap gap-[10px] items-center relative shrink-0 w-[233px]">
      <Frame93 />
      <Frame94 />
      <Frame95 />
      <Frame96 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Fuente de letra de la web</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[#8a8a8a] text-[10px] w-[min-content]">Cambia la fuente de las palabras de la aplicación web.</p>
      <Frame97 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0 w-[20px]">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#323437] text-[10px] text-nowrap whitespace-pre">|</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0 w-[20px]">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">.</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0 w-[20px]">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">_</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-[#656669] box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0 w-[20px]">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">¬</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame98 />
      <Frame99 />
      <Frame100 />
      <Frame101 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[233px]">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Estilo del Cursor</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[#8a8a8a] text-[10px] w-[min-content]">Permite cambiar el estilo del cursor durante la prueba.</p>
      <Frame102 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-[238px]">
      <Frame91 />
      <Frame23 />
      <Frame24 />
      <Frame103 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#323437] text-[10px] text-nowrap whitespace-pre">Desactivado</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="[grid-area:1_/_1] bg-[#656669] box-border content-stretch flex gap-[10px] h-[19px] items-center ml-0 mt-0 px-[5px] py-[3px] relative rounded-[3px] w-[152px]">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Url...</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="[grid-area:1_/_1] bg-[#323437] box-border content-stretch flex gap-[5px] items-center justify-center ml-[98px] mt-[2px] px-[3px] py-px relative rounded-[3px]">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e4dc] text-[10px] text-nowrap whitespace-pre">Aplicar</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame105 />
      <Frame106 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame104 />
      <Group4 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Fondo personalizado</p>
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#8a8a8a] text-[10px] w-[223px]">Permite establecer la URL de una imagen como fondo personalizado</p>
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[3px] items-center justify-center ml-[4px] mt-[27px] relative">
      <div className="bg-[#ffde4d] h-[13px] rounded-[1px] shrink-0 w-[7px]" />
      <div className="bg-[#656669] h-[13px] rounded-[1px] shrink-0 w-[7px]" />
      <div className="bg-white h-[13px] rounded-[1px] shrink-0 w-[7px]" />
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#323437] border border-[#ffde4d] border-solid ml-0 mt-0 rounded-[5px] shadow-[0px_0px_5px_2px_rgba(0,0,0,0.25)] size-[35px]" />
      <p className="[grid-area:1_/_1] font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] ml-[18px] mt-[12px] relative text-[#ffde4d] text-[7.5px] text-center text-nowrap translate-x-[-50%] whitespace-pre">Serika</p>
      <Frame28 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[3px] items-center justify-center ml-[4px] mt-[27px] relative">
      <div className="bg-[#deaf9d] h-[13px] rounded-[1px] shrink-0 w-[7px]" />
      <div className="bg-[#4e3e3e] h-[13px] rounded-[1px] shrink-0 w-[7px]" />
      <div className="bg-[#f2efed] h-[13px] rounded-[1px] shrink-0 w-[7px]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#1c1b1d] ml-0 mt-0 rounded-[5px] shadow-[0px_0px_5px_2px_rgba(0,0,0,0.25)] size-[35px]" />
      <p className="[grid-area:1_/_1] font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] ml-[3px] mt-[11px] relative text-[#deaf9d] text-[8px] text-nowrap whitespace-pre">Olivia</p>
      <Frame107 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[3px] items-center justify-center ml-[4px] mt-[27px] relative">
      <div className="bg-[#feff04] h-[13px] rounded-[1px] shrink-0 w-[7px]" />
      <div className="bg-[#5c4a9c] h-[13px] rounded-[1px] shrink-0 w-[7px]" />
      <div className="bg-[#e8e8e8] h-[13px] rounded-[1px] shrink-0 w-[7px]" />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#212121] ml-0 mt-0 rounded-[5px] shadow-[0px_0px_5px_2px_rgba(0,0,0,0.25)] size-[35px]" />
      <p className="[grid-area:1_/_1] font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] ml-[3px] mt-[11px] relative text-[#feff04] text-[8px] text-nowrap whitespace-pre">Runner</p>
      <Frame108 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[3px] items-center justify-center ml-[4px] mt-[27px] relative">
      <div className="bg-[#99de1e] h-[13px] rounded-[1px] shrink-0 w-[7px]" />
      <div className="bg-[#7554a3] h-[13px] rounded-[1px] shrink-0 w-[7px]" />
      <div className="bg-[#e9e2f5] h-[13px] rounded-[1px] shrink-0 w-[7px]" />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#1a0e25] ml-0 mt-0 rounded-[5px] shadow-[0px_0px_5px_2px_rgba(0,0,0,0.25)] size-[35px]" />
      <p className="[grid-area:1_/_1] font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] ml-[17.5px] mt-[11px] relative text-[#99de1e] text-[8px] text-center text-nowrap translate-x-[-50%] whitespace-pre">Jocker</p>
      <Frame109 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[3px] items-center justify-center ml-[4px] mt-[27px] relative">
      <div className="bg-[#5a65ea] h-[13px] rounded-[1px] shrink-0 w-[7px]" />
      <div className="bg-[#565861] h-[13px] rounded-[1px] shrink-0 w-[7px]" />
      <div className="bg-[#dcdee3] h-[13px] rounded-[1px] shrink-0 w-[7px]" />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#313338] ml-0 mt-0 rounded-[5px] shadow-[0px_0px_5px_2px_rgba(0,0,0,0.25)] size-[35px]" />
      <p className="[grid-area:1_/_1] font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] ml-[18px] mt-[12px] relative text-[#5a65ea] text-[7.5px] text-center text-nowrap translate-x-[-50%] whitespace-pre">Discord</p>
      <Frame110 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center leading-[0] relative shrink-0">
      <Group9 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#e5e4dc] text-[10px] w-[min-content]">Tema de la aplicación</p>
      <Frame29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-end relative shrink-0 w-full">
      <Frame27 />
      <Frame30 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] h-[516px] items-center left-[24px] overflow-x-clip overflow-y-auto top-[162px] w-[251px]">
      <Comportamiento />
      <Frame13 />
      <Frame18 />
      <Frame22 />
      <Frame25 />
      <Frame31 />
    </div>
  );
}

function Config() {
  return (
    <div className="absolute contents left-[24px] top-[20px]" data-name="config">
      <Group1 />
      <MenuConfiguracion />
      <Frame32 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p28150300} id="Vector" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p8bc2f80} id="Vector_2" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <Frame />
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#8a8a8a] text-[10px] text-center text-nowrap whitespace-pre">Frases</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p276255c0} id="Vector" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.5 10V15" id="Vector_2" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10.8333 10V15" id="Vector_3" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p352ae800} id="Vector_4" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2e969c00} id="Vector_5" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <Frame1 />
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#8a8a8a] text-[10px] text-center text-nowrap whitespace-pre">Abridores</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_451)" id="Frame">
          <path d={svgPaths.p1f032080} id="Vector" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3160ba80} id="Vector_2" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pca1b000} id="Vector_3" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p14d24500} id="Vector_4" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_451">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <Frame111 />
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#8a8a8a] text-[10px] text-center text-nowrap whitespace-pre">Español</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M8.33333 6.66667H8.34167" id="Vector" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10 10H10.0083" id="Vector_2" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M11.6667 6.66667H11.675" id="Vector_3" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M13.3333 10H13.3417" id="Vector_4" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15 6.66667H15.0083" id="Vector_5" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5 6.66667H5.00833" id="Vector_6" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5.83333 13.3333H14.1667" id="Vector_7" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.66667 10H6.675" id="Vector_8" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pd919a80} id="Vector_9" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame112 />
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#8a8a8a] text-[10px] text-center text-nowrap whitespace-pre">Palabras</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M3.33333 7.5H16.6667" id="Vector" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.33333 12.5H16.6667" id="Vector_2" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8.33333 2.5L6.66667 17.5" id="Vector_3" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M13.3333 2.5L11.6667 17.5" id="Vector_4" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <Frame113 />
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#8a8a8a] text-[10px] text-center text-nowrap whitespace-pre">Con números</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-[561px] top-[30px]">
      <Frame36 />
      <Frame37 />
      <Frame35 />
      <Frame34 />
      <Frame33 />
    </div>
  );
}

function Options() {
  return (
    <div className="absolute contents left-[440px] top-[20px]" data-name="options">
      <div className="absolute bg-[#282a2c] h-[43px] right-[141px] rounded-[10px] top-[20px] w-[699px]" />
      <Frame38 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto_Mono:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[10px] w-[313px]">
      <p className="leading-[normal] relative shrink-0 text-[#ffde4d] w-full">KeyFlare</p>
      <div className="leading-[15px] relative shrink-0 text-[#8a8a8a] w-full">
        <p className="mb-0">
          Parte del repertorio de apps de<span className="text-white">{` JULES.`}</span>
        </p>
        <p className="mb-0">
          <span>{`Desarrollado por `}</span>
          <span className="text-white">Luis MP</span>
          <span>{` como proyecto de práctica.`}</span>
        </p>
        <p className="mb-0">
          <span>{`Referencia y inspiración tomada de `}</span>
          <span className="text-white">MonkeyType,</span>
          <span>{` desarrollado por `}</span>
          <span className="text-[#e5e4dc]">{`Mitch Paone `}</span>y<span className="text-[#e5e4dc]">{` Meg Donohoe.`}</span>
        </p>
        <p className="mb-0">
          <span>{`Inspirado por `}</span>
          <span className="text-white">midudev.</span>
        </p>
        <p className="mb-0 text-[10px]">&nbsp;</p>
        <p>2025 JULES. Con mucho cariño para la comunidad dev</p>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <Frame114 />
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[12px] text-nowrap whitespace-pre">Contactame</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.pbf3e180} id="Vector" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p5272800} id="Vector_2" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame115 />
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[12px] text-nowrap whitespace-pre">Github</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p89d1480} id="Vector" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p17869500} id="Vector_2" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1c3f8340} id="Vector_3" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p9d02100} id="Vector_4" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p164b9b80} id="Vector_5" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame116 />
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[12px] text-nowrap whitespace-pre">Figma</p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3e9b00} id="Vector" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p19f7d900} id="Vector_2" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pc663880} id="Vector_3" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame117 />
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[12px] text-nowrap whitespace-pre">WhatsApp</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start justify-center relative shrink-0">
      <Frame47 />
      <Frame42 />
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[3.41%_2.79%_3.09%_3.4%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 17">
        <g id="Group">
          <path d={svgPaths.p33e5f680} fill="var(--fill-0, #199AFC)" id="Vector" />
          <path d={svgPaths.p23843800} fill="var(--fill-0, #1D5682)" id="Vector_2" />
          <g id="Group_2">
            <path d={svgPaths.p2b605200} fill="var(--fill-0, #199AFC)" id="Vector_3" />
            <path d={svgPaths.p3e143b00} fill="var(--fill-0, #1D5682)" id="Vector_4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame118() {
  return (
    <div className="h-[17.419px] overflow-clip relative shrink-0 w-[20px]" data-name="Frame">
      <Group10 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Group">
          <path d={svgPaths.p3fef800} fill="var(--fill-0, #FFDE4D)" id="Vector" />
          <path d={svgPaths.p19558e00} fill="var(--fill-0, #FFDE4D)" id="Vector_2" />
          <path d={svgPaths.p16c43f00} fill="var(--fill-0, #FFDE4D)" id="Vector_3" />
          <path d={svgPaths.p38417c00} fill="var(--fill-0, #FFDE4D)" id="Vector_4" />
          <path d={svgPaths.p3a8b3a80} fill="var(--fill-0, #FFDE4D)" id="Vector_5" />
          <path d={svgPaths.p3710b180} fill="var(--fill-0, #FFDE4D)" id="Vector_6" />
          <path d={svgPaths.pdc84f00} fill="var(--fill-0, #FFDE4D)" id="Vector_7" />
          <path d={svgPaths.p3c0f5c80} fill="var(--fill-0, #FFDE4D)" id="Vector_8" />
          <path d={svgPaths.p14c82380} fill="var(--fill-0, #FFDE4D)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="h-[20px] relative shrink-0 w-[14.8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
          <g id="Vector 15">
            <path d={svgPaths.p16724000} fill="url(#paint0_linear_1_400)" />
            <path d={svgPaths.p3ece9380} fill="url(#paint1_linear_1_400)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_400" x1="9.37333" x2="2.46667" y1="6.16667" y2="13.5667">
              <stop stopColor="#32AAFF" />
              <stop offset="0.431417" stopColor="#2F40FF" />
              <stop offset="0.771417" stopColor="#201A6B" />
              <stop offset="1" stopColor="#0D0B2E" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_400" x1="9.37333" x2="2.46667" y1="6.16667" y2="13.5667">
              <stop stopColor="#32AAFF" />
              <stop offset="0.431417" stopColor="#2F40FF" />
              <stop offset="0.771417" stopColor="#201A6B" />
              <stop offset="1" stopColor="#0D0B2E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex h-[14.063px] items-center justify-center relative shrink-0 w-[15px]" style={{ "--transform-inner-width": "14.0625", "--transform-inner-height": "15" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[15px] relative w-[14.063px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <g id="Vector">
                <path d={svgPaths.p2b284f30} fill="#FFE677" />
                <path d={svgPaths.p139d4300} fill="#FFD000" />
                <path d={svgPaths.p3287e300} fill="var(--fill-0, #D8B000)" />
                <path d={svgPaths.p2928c580} fill="#A27528" />
                <path d={svgPaths.p10bc9e00} fill="#FFF5C9" />
                <path d={svgPaths.p23f8a100} fill="#FFDE4D" />
                <path d={svgPaths.p2d66880} fill="var(--fill-0, #D8B000)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Frame118 />
      <Frame119 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M8.33333 1.66667V3.33333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M11.6667 1.66667V3.33333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p257a4f00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 1.66667V3.33333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#656669] relative rounded-[2px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[5px] items-center justify-center p-[5px] relative w-full">
          <Frame120 />
          <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Comprame un cafe</p>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[151px]">
      <Frame39 />
      <Frame45 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute content-stretch flex gap-[112px] items-end justify-center left-[397px] top-[560px]">
      <Frame49 />
      <Frame46 />
      <Frame48 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute contents left-[320px] top-[528px]" data-name="Footer">
      <div className="absolute bg-[#282a2c] bottom-0 h-[192px] right-[20px] rounded-tl-[5px] rounded-tr-[5px] w-[940px]" />
      <Frame50 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M8.33333 1.66667H11.6667" id="Vector" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10 11.6667L12.5 9.16667" id="Vector_2" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pcf2c700} id="Vector_3" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame121 />
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#8a8a8a] text-[10px] text-center text-nowrap whitespace-pre">Tiempo:</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex font-['Roboto_Mono:Light',sans-serif] font-light gap-[10px] items-center leading-[normal] relative shrink-0 text-[10px] text-center text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#8a8a8a]">15s</p>
      <p className="relative shrink-0 text-[#ffde4d]">30s</p>
      <p className="relative shrink-0 text-[#8a8a8a]">60s</p>
      <p className="relative shrink-0 text-[#8a8a8a]">90s</p>
      <p className="relative shrink-0 text-[#8a8a8a]">120s</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_1_466)" id="Frame">
          <path d={svgPaths.p185087f0} id="Vector" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.5 10V7.5" id="Vector_2" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.5 5H7.50625" id="Vector_3" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_466">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame123() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[3px] relative rounded-[3px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#656669] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8a8a8a] text-[10px] text-nowrap whitespace-pre">30s</p>
      <Frame122 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[30px] items-center justify-center relative shrink-0">
      <Frame52 />
      <Frame51 />
      <Frame123 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-[373px]">
      <Frame53 />
      <p className="font-['Roboto_Mono:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[#8a8a8a] text-[10px] text-center w-[min-content]">Puedes establecer tu tiempo utilizando este formato: 1h:5m:30s</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[9px] mt-[7px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#ffde4d] h-[20px] ml-0 mt-0 w-[2px]" />
    </div>
  );
}

function Test() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="test">
      <p className="[grid-area:1_/_1] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] ml-[318.5px] mt-0 relative text-[#8a8a8a] text-[25px] text-center translate-x-[-50%] w-[637px]">abraza el caos, pues el orden es solo una ilusión a la espera de ser desgarrada por la pasión.</p>
      <Group11 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-[471px] top-[calc(50%-13.5px)] translate-y-[-50%] w-[637px]">
      <Frame54 />
      <Test />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#323437] overflow-clip relative rounded-[20px] size-full" data-name="Home">
      <Config />
      <Options />
      <Footer />
      <Frame55 />
    </div>
  );
}