import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour gérer les conversions de devise
 * @param {number} rate - Taux de change actuel
 * @returns {Object} État et fonctions pour les conversions
 */
const useConversion = (rate) => {
  const [inputValue, setInputValue] = useState(1);
  const [convertedValue, setConvertedValue] = useState(rate);
  const [isEuroToDollar, setIsEuroToDollar] = useState(true);
  const [history, setHistory] = useState([]);

  // Calculer la conversion
  const calculateConversion = (value, rate, isEurToDollar) => {
    if (isEurToDollar) {
      return parseFloat((value * rate).toFixed(2));
    } else {
      return parseFloat((value / rate).toFixed(2));
    }
  };

  // Mettre à jour la valeur convertie lorsque les paramètres changent
  useEffect(() => {
    if (inputValue) {
      const newConvertedValue = calculateConversion(inputValue, rate, isEuroToDollar);
      setConvertedValue(newConvertedValue);
      
      // Ajouter à l'historique
      const newHistoryItem = {
        key: Date.now(),
        realRate: rate, // Supposons que c'est le taux réel, pourrait être paramétré différemment
        usedRate: rate,
        inputValue: inputValue,
        inputCurrency: isEuroToDollar ? 'EUR' : 'USD',
        outputValue: newConvertedValue,
        outputCurrency: isEuroToDollar ? 'USD' : 'EUR',
        timestamp: new Date().toLocaleTimeString()
      };
      
      setHistory(prevHistory => {
        const newHistory = [newHistoryItem, ...prevHistory].slice(0, 5);
        return newHistory;
      });
    }
  }, [inputValue, rate, isEuroToDollar]);

  // Fonction pour changer la direction de conversion
  const toggleDirection = () => {
    setIsEuroToDollar(prev => !prev);
    // Assurer la continuité: la sortie devient la nouvelle entrée
    setInputValue(convertedValue);
  };

  return {
    inputValue,
    convertedValue,
    isEuroToDollar,
    history,
    setInputValue,
    toggleDirection
  };
};

export default useConversion;