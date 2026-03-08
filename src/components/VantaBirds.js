import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  /* Pointer events pass through so hero text stays clickable */
  pointer-events: none;
`;

const VantaBirds = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Guard: never run during SSR
    if (typeof window === 'undefined') {return;}

    let cancelled = false;

    const init = async () => {
      try {
        // Dynamically import both three and vanta so Gatsby SSR is never touched
        const THREE = await import('three');
        const BIRDS = await import('vanta/dist/vanta.birds.min');

        if (cancelled || !vantaRef.current) {return;}

        vantaEffect.current = BIRDS.default({
          el: vantaRef.current,
          THREE: THREE,

          // ── Palette ──────────────────────────────────────────────
          // Background matches site --navy: #F8F3ED (cream/beige)
          backgroundColor: 0xf8f3ed,

          // Wing colours: crimson (#8A1538) & rose-pink (#b8405b)
          // These are visible against the light bg but not overwhelming
          color1: 0x8a1538,
          color2: 0xb8405b,

          // ── Flock behaviour ──────────────────────────────────────
          quantity: 3, // Keep flock subtle - not too busy
          birdSize: 1.4, // Slightly larger so they read well
          wingSpan: 28, // Medium wingspan
          speedLimit: 4, // Gentle drift
          separation: 60, // Birds keep comfortable distance
          alignment: 40,
          cohesion: 35,

          // ── Mouse sensitivity ─────────────────────────────────
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
        });
      } catch (err) {
        // Fail silently — site still works perfectly without the effect
        console.warn('Vanta BIRDS failed to initialise:', err);
      }
    };

    init();

    return () => {
      cancelled = true;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return <CanvasWrapper ref={vantaRef} aria-hidden="true" />;
};

export default VantaBirds;
