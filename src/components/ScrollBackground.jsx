import React, { useEffect, useRef, useState } from 'react';

const allPngs = import.meta.glob('/src/assets/**/*.png', { eager: true, query: '?url', import: 'default' });

const imageUrls = Object.keys(allPngs)
  .filter(key => key.includes('_MConverter.eu_Cement_powder_forms_building_str…_202608311302-cleaned'))
  .sort((a, b) => a.localeCompare(b))
  .map(key => allPngs[key]);

const FRAME_COUNT = imageUrls.length;

const ScrollBackground = () => {
  const canvasRef = useRef(null);
  
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
      if (loadedCount === 0 || !canvasRef.current) return;
      
      const html = document.documentElement;
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      
      const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
      
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
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ScrollBackground;
