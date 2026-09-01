import React, { useEffect, useRef, useState } from 'react';

// Get all PNGs in assets using a safe, broad glob
const allPngs = import.meta.glob('/src/assets/**/*.png', { eager: true, query: '?url', import: 'default' });

// Filter dynamically to bypass any fast-glob unicode parsing bugs
const imageUrls = Object.keys(allPngs)
  .filter(key => key.includes('_MConverter.eu_Cement_powder_forms_building_str…_202608311302-cleaned'))
  .sort((a, b) => a.localeCompare(b))
  .map(key => allPngs[key]);

const FRAME_COUNT = imageUrls.length;

const Animation = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    if (FRAME_COUNT === 0) return;

    const loadedImages = [];
    let loadedCount = 0;
    
    // Preload images
    imageUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        // Draw the very first frame as soon as it's loaded to prevent blank screen
        if (index === 0 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          canvasRef.current.width = img.width;
          canvasRef.current.height = img.height;
          ctx.drawImage(img, 0, 0);
        }
      };
      loadedImages[index] = img;
    });
    
    setImages(loadedImages);
    
    const handleScroll = () => {
      if (loadedCount === 0 || !canvasRef.current) return;
      
      const html = document.documentElement;
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const scrollFraction = scrollTop / maxScrollTop;
      
      // Map scroll progress to frame index
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(scrollFraction * FRAME_COUNT))
      );
      
      requestAnimationFrame(() => {
        const img = loadedImages[frameIndex];
        if (img && img.complete) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          // Ensure canvas dimensions match image dimensions
          if (canvas.width !== img.width) canvas.width = img.width;
          if (canvas.height !== img.height) canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial draw
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '500vh', backgroundColor: '#000', margin: 0, padding: 0 }}>
      {FRAME_COUNT === 0 && (
        <div style={{ color: 'white', padding: '20px' }}>
          Error: No frames found. Check folder path.
        </div>
      )}
      <div style={{ position: 'fixed', top: 10, left: 10, color: 'white', zIndex: 9999 }}>
        Frames found: {FRAME_COUNT} | Loaded: {images.filter(img => img && img.complete).length}
      </div>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover'
        }}
      />
    </div>
  );
};

export default Animation;
