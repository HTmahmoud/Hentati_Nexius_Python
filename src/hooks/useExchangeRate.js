import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour gérer le taux de change et le taux fixe
 * @param {number} initialRate - Taux de change initial
 * @returns {Object} Taux de change et méthodes associées
 */
const useExchangeRate = (initialRate = 1.1) => {
  const [exchangeRate, setExchangeRate] = useState(initialRate);
  const [fixedRate, setFixedRate] = useState(null);
  const [isFixedRateActive, setIsFixedRateActive] = useState(false);

  // Mise à jour du taux de change toutes les 3 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      const variation = (Math.random() * 0.1) - 0.05;
      const newRate = parseFloat((exchangeRate + variation).toFixed(4));
      setExchangeRate(newRate);
      
      // Vérifier si le taux fixe doit être désactivé (>2% d'écart)
      if (isFixedRateActive && fixedRate) {
        const difference = Math.abs((newRate - fixedRate) / fixedRate) * 100;
        if (difference > 2) {
          setIsFixedRateActive(false);
        }
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [exchangeRate, isFixedRateActive, fixedRate]);

  // Fonction pour appliquer un taux fixe
  const applyFixedRate = (rate) => {
    if (rate && !isNaN(rate)) {
      setFixedRate(parseFloat(rate));
      setIsFixedRateActive(true);
      return true;
    }
    return false;
  };

  // Fonction pour désactiver le taux fixe
  const disableFixedRate = () => {
    setIsFixedRateActive(false);
  };

  // Retourner le taux à utiliser et les fonctions de gestion
  const currentRate = isFixedRateActive && fixedRate ? fixedRate : exchangeRate;

  return {
    exchangeRate,
    fixedRate,
    isFixedRateActive,
    currentRate,
    applyFixedRate,
    disableFixedRate
  };
};

export default useExchangeRate;