import { useEffect, useRef, useState } from 'react';
import { useNetworkStatus, usePerformanceMonitor } from '@/hooks/usePerformance';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const { isOnline, connectionType } = useNetworkStatus();
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const performanceRef = useRef<number>(0);

  // Performance monitoring
  usePerformanceMonitor('PerformanceOptimizer');

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    // Performance detection
    const detectPerformance = () => {
      const start = performance.now();
      
      // Simple performance test
      let result = 0;
      for (let i = 0; i < 1000000; i++) {
        result += Math.random();
      }
      
      const end = performance.now();
      const duration = end - start;
      
      performanceRef.current = duration;
      
      // Consider low performance if test takes more than 50ms
      setIsLowPerformance(duration > 50);
    };

    detectPerformance();

    // Check for low-end devices
    const checkDeviceCapabilities = () => {
      const memory = (navigator as any).deviceMemory;
      const cores = (navigator as any).hardwareConcurrency;
      
      if (memory && memory < 4) {
        setIsLowPerformance(true);
      }
      
      if (cores && cores < 4) {
        setIsLowPerformance(true);
      }
    };

    checkDeviceCapabilities();

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Apply performance optimizations
  useEffect(() => {
    const root = document.documentElement;
    
    if (isLowPerformance) {
      root.classList.add('low-performance');
    } else {
      root.classList.remove('low-performance');
    }
    
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    if (!isOnline) {
      root.classList.add('offline-mode');
    } else {
      root.classList.remove('offline-mode');
    }
  }, [isLowPerformance, isReducedMotion, isOnline]);

  // Network status indicator (optional)
  const renderNetworkStatus = () => {
    if (!isOnline) {
      return (
        <div className="fixed top-4 right-4 z-50 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg">
          Offline
        </div>
      );
    }
    
    if (connectionType === 'slow-2g' || connectionType === '2g') {
      return (
        <div className="fixed top-4 right-4 z-50 bg-chart-4 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
          Slow Connection
        </div>
      );
    }
    
    return null;
  };

  return (
    <>
      {renderNetworkStatus()}
      {children}
    </>
  );
};

export default PerformanceOptimizer;
