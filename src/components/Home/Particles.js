import React, { useEffect, useRef } from "react";

const svgList = [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.35 122.88" width="30px" height="30px"><style xmlns="http://www.w3.org/2000/svg" type="text/css"> .st0 { fill-rule: evenodd; clip-rule: evenodd; fill: #e44d26; } .st1 { fill-rule: evenodd; clip-rule: evenodd; fill: #f16529; } .st2 { fill-rule: evenodd; clip-rule: evenodd; fill: #ebebeb; } .st3 { fill-rule: evenodd; clip-rule: evenodd; fill: #ffffff; } </style><g xmlns="http://www.w3.org/2000/svg"><polygon class="st0" points="108.35,0 98.48,110.58 54.11,122.88 9.86,110.6 0,0 108.35,0"/><polygon class="st1" points="54.17,113.48 90.03,103.54 98.46,9.04 54.17,9.04 54.17,113.48"/><path class="st2" d="M34.99,36.17h19.19V22.61H20.16l0.32,3.64l3.33,37.38h30.35V50.06H36.23L34.99,36.17L34.99,36.17L34.99,36.17z M38.04,70.41H24.43l1.9,21.3l27.79,7.71l0.06-0.02V85.29l-0.06,0.02l-15.11-4.08L38.04,70.41L38.04,70.41L38.04,70.41z"/><path class="st3" d="M54.13,63.63h16.7l-1.57,17.59L54.13,85.3v14.11l27.81-7.71l0.2-2.29l3.19-35.71l0.33-3.64H54.13V63.63 L54.13,63.63z M54.13,36.14v0.03h32.76l0.27-3.05l0.62-6.88l0.32-3.64H54.13V36.14L54.13,36.14L54.13,36.14z"/></g></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296297 333333" width="30px" height="30px"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" > <defs xmlns="http://www.w3.org/2000/svg"> <linearGradient id="id4" gradientUnits="userSpaceOnUse" x1="54128.7" y1="79355.5" x2="240318" y2="79355.5" > <stop offset="0" stop-color="#e8e7e5" /> <stop offset="1" stop-color="#fff" /> </linearGradient> <linearGradient id="id5" gradientUnits="userSpaceOnUse" x1="62019.3" y1="202868" x2="233515" y2="202868" > <stop offset="0" stop-color="#e8e7e5" /> <stop offset="1" stop-color="#fff" /> </linearGradient> <linearGradient id="id6" gradientUnits="userSpaceOnUse" x1="104963" y1="99616.9" x2="104963" y2="171021" > <stop offset="0" stop-color="#d1d3d4" /> <stop offset=".388" stop-color="#d1d3d4" /> <stop offset="1" stop-color="#d1d3d4" /> </linearGradient> <linearGradient id="id7" gradientUnits="userSpaceOnUse" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#id6" x1="194179" y1="61185.8" x2="194179" y2="135407" /> <mask id="id0"> <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="104963" y1="99616.9" x2="104963" y2="171021" > <stop offset="0" stop-opacity="0" stop-color="#fff" /> <stop offset=".388" stop-color="#fff" /> <stop offset="1" stop-opacity=".831" stop-color="#fff" /> </linearGradient> <path fill="url(#id1)" d="M61737 99467h86453v71704H61737z" /> </mask> <mask id="id2"> <linearGradient id="id3" gradientUnits="userSpaceOnUse" x1="194179" y1="61185.8" x2="194179" y2="135407" > <stop offset="0" stop-opacity="0" stop-color="#fff" /> <stop offset=".388" stop-color="#fff" /> <stop offset="1" stop-opacity=".831" stop-color="#fff" /> </linearGradient> <path fill="url(#id3)" d="M147890 61036h92578v74521h-92578z" /> </mask> <style> .fil6 { fill: #000; fill-opacity: 0.05098; } </style> </defs> <g xmlns="http://www.w3.org/2000/svg" id="Layer_x0020_1"> <g id="_513085304"> <path fill="#2062af" d="M268517 300922l-120369 32411-120371-32411L0 0h296297z" /> <path fill="#3c9cd7" d="M148146 24374v283109l273 74 97409-26229 22485-256954z" /> <path fill="#fff" d="M148040 99617l-86153 35880 2857 35524 83296-35614 88604-37883 3674-36339-92278 38432z" /> <path mask="url(#id0)" fill="url(#id6)" d="M61887 135497l2857 35524 83295-35614V99617z" /> <path mask="url(#id2)" fill="url(#id7)" d="M240318 61186l-92278 38431v35790l88604-37883z" /> <path fill="url(#id5)" d="M62019 135497l2858 35524 127806 407-2859 47365-42055 11840-40428-10208-2450-29399H67327l4900 56756 75950 22457 75538-22050 9800-112692z" /> <path class="fil6" d="M148040 135497H61888l2857 35524 83295 266v-35790zm0 95022l-408 114-40422-10208-2450-29399H67197l4899 56756 75944 22457v-39720z" /> <path fill="url(#id4)" d="M54129 61186h186189l-3674 36339H58620l-4491-36339z" /><path class="fil6" d="M148040 61186H54129l4491 36339h89420z" /></g></g></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 122.88" style="enable-background: new 0 0 122.88 122.88" xml:space="preserve" > <style type="text/css"> .stj0 { fill-rule: evenodd; clip-rule: evenodd; fill: #f7df1e; } .stj1 { fill-rule: evenodd; clip-rule: evenodd; fill: black; } </style> <g> <polygon class="stj0" points="0,0 122.88,0 122.88,122.88 0,122.88 0,0" /> <path class="stj1" d="M32.31,102.69l9.4-5.69c1.81,3.22,3.46,5.94,7.42,5.94c3.79,0,6.19-1.48,6.19-7.26V56.41h11.55v39.43 c0,11.96-7.01,17.4-17.24,17.4C40.39,113.24,35.03,108.46,32.31,102.69L32.31,102.69L32.31,102.69z M73.14,101.45l9.4-5.44 c2.48,4.04,5.69,7.01,11.38,7.01c4.78,0,7.84-2.39,7.84-5.69c0-3.96-3.13-5.36-8.41-7.67l-2.89-1.24c-8.33-3.55-13.86-8-13.86-17.4 c0-8.66,6.6-15.26,16.91-15.26c7.34,0,12.62,2.56,16.41,9.24l-8.99,5.77c-1.98-3.55-4.12-4.95-7.42-4.95 c-3.38,0-5.53,2.14-5.53,4.95c0,3.46,2.14,4.87,7.09,7.01l2.89,1.24c9.82,4.21,15.34,8.5,15.34,18.15 c0,10.39-8.17,16.08-19.14,16.08C83.45,113.25,76.52,108.13,73.14,101.45L73.14,101.45L73.14,101.45z M73.14,101.45L73.14,101.45 L73.14,101.45L73.14,101.45z" /> </g> </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
  <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
  <g stroke="#61dafb" stroke-width="1" fill="none">
    <ellipse rx="11" ry="4.2"/>
    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
  </g>
</svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-47.5 0 351 351" version="1.1" preserveAspectRatio="xMidYMid">
    <defs>
        <path d="M1.25273437,280.731641 L2.85834533,277.600858 L102.211177,89.0833546 L58.0613266,5.6082033 C54.3920011,-1.28304578 45.0741245,0.473674398 43.8699203,8.18789086 L1.25273437,280.731641 Z" id="path-1">

</path>
        <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-2">
            <feGaussianBlur stdDeviation="17.5" in="SourceAlpha" result="shadowBlurInner1">

</feGaussianBlur>
            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1">

</feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1">

</feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0" type="matrix" in="shadowInnerInner1">

</feColorMatrix>
        </filter>
        <path d="M134.417103,148.974235 L166.455722,116.161738 L134.417104,55.1546874 C131.374828,49.3635911 123.983911,48.7568362 120.973828,54.5646483 L103.26875,88.6738296 L102.739423,90.4175473 L134.417103,148.974235 Z" id="path-3">

</path>
        <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-4">
            <feGaussianBlur stdDeviation="3.5" in="SourceAlpha" result="shadowBlurInner1">

</feGaussianBlur>
            <feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1">

</feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1">

</feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09 0" type="matrix" in="shadowInnerInner1">

</feColorMatrix>
        </filter>
    </defs>
	<g>
		<path d="M0,282.99762 L2.12250746,280.0256 L102.527363,89.5119284 L102.739423,87.4951323 L58.478806,4.35817711 C54.7706269,-2.60604179 44.3313035,-0.845245771 43.1143483,6.95065473 L0,282.99762 Z" fill="#FFC24A">

</path>
		<g>
			<use fill="#FFA712" fill-rule="evenodd" xlink:href="#path-1">

</use>
			<use fill="#000000" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1">

</use>
		</g>
		<path d="M135.004975,150.380704 L167.960199,116.629461 L134.995423,53.6993114 C131.866109,47.7425353 123.128817,47.7253411 120.032618,53.6993112 L102.421015,87.2880848 L102.421015,90.1487443 L135.004975,150.380704 Z" fill="#F4BD62">

</path>
		<g>
			<use fill="#FFA50E" fill-rule="evenodd" xlink:href="#path-3">

</use>
			<use fill="#000000" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-3">

</use>
		</g>
		<polygon fill="#F6820C" points="0 282.99762 0.962097168 282.030396 4.45771144 280.60956 132.935323 152.60956 134.563025 148.178595 102.513123 87.1048584">

</polygon>
		<path d="M139.120971,347.551268 L255.395916,282.703666 L222.191698,78.2093373 C221.153051,71.8112478 213.303658,69.2818149 208.724314,73.8694368 L0.000254726368,282.997875 L115.608454,347.545536 C122.914643,351.624979 131.812872,351.62689 139.120971,347.551268" fill="#FDE068">

</path>
		<path d="M254.354084,282.159837 L221.401937,79.2179369 C220.371175,72.8684188 213.843792,70.2409553 209.299213,74.79375 L1.28945312,282.600785 L115.627825,346.509458 C122.878548,350.557931 131.709226,350.559827 138.961846,346.515146 L254.354084,282.159837 Z" fill="#FCCA3F">

</path>
		<path d="M139.120907,345.64082 C131.812808,349.716442 122.914579,349.714531 115.60839,345.635089 L0.93134768,282.014551 L0.000191044776,282.997875 L115.60839,347.545536 C122.914579,351.624979 131.812808,351.62689 139.120907,347.551268 L255.395853,282.703666 L255.111196,280.951785 L139.120907,345.64082 Z" fill="#EEAB37">

</path>
	</g>
</svg>`,
];

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createParticles = (count) => {
      particlesRef.current = Array.from({ length: count }, () => {
        const img = new Image();
        const svg = svgList[Math.floor(Math.random() * svgList.length)];
        const svgBase64 = `data:image/svg+xml;base64,${btoa(
          unescape(encodeURIComponent(svg))
        )}`;
        img.src = svgBase64;

        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          img,
        };
      });
    };

    createParticles(25);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.drawImage(particle.img, particle.x, particle.y, 30, 30);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: "0",
        zIndex: "-1",
        height: "100%",
        width: "100%",
      }}
    />
  );
};

export default ParticleCanvas;
