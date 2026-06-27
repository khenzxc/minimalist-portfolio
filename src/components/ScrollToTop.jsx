import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Pinipilit nitong ibalik sa pinakataas ang screen
  }, [pathname]); // Tatakbo ito tuwing magbabago ang URL path

  return null; // Walang ididisplay na UI ito, taga-utos lang sa scroll
}