import React, { useEffect, useRef } from 'react';

const allPngs = import.meta.glob('/src/assets/**/*.png', { eager: true, query: '?url', import: 'default' });

const imageUrls = Object.keys(allPngs)
  .filter(key => key.includes('_MConverter.eu_Cement_powder_forms_building_str…_202608311302-cleaned'))
  .sort((a, b) => a.localeCompare(b))
  .map(key => allPngs[key]);

const FRAME_COUNT = imageUrls.length;

const HeroAnimation = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (FRAME_COUNT === 0) return;

    const loadedImages = [];
    let loadedCount = 0;
    
    imageUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        if (index === 0 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          canvasRef.current.width = img.width;
          canvasRef.current.height = img.height;
          ctx.drawImage(img, 0, 0);
        }
      };
      loadedImages[index] = img;
    });
    
    const handleScroll = () => {
      if (loadedCount === 0 || !canvasRef.current || !containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const scrollY = -rect.top; 
      const maxScroll = rect.height - window.innerHeight;
      
      let scrollFraction = maxScroll > 0 ? scrollY / maxScroll : 0;
      scrollFraction = Math.max(0, Math.min(1, scrollFraction));
      
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(scrollFraction * FRAME_COUNT))
      );
      
      requestAnimationFrame(() => {
        const img = loadedImages[frameIndex];
        if (img && img.complete) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          if (canvas.width !== img.width) canvas.width = img.width;
          if (canvas.height !== img.height) canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '300vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', backgroundColor: '#000' }}>
        <canvas
          ref={canvasRef}
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover'
          }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(30, 40, 50, 0.4)' }}></div>
        <div className="container" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 10, width: '100%' }}>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            Producing Fine Products
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
