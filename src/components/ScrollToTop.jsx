import { useLayoutEffect } from 'react'; // 💡 Pinalitan mula 'useEffect'
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Kinukuha ang kasalukuyang scroll position para i-lock habang nag-rerender
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    } catch (error) {
      // Fallback para sa mga lumang browser
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}