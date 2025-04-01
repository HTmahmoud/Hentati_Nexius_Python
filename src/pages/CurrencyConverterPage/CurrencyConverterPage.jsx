import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import './CurrencyConverterPage.css';

// Hooks personnalisés
import useExchangeRate from '../../hooks/useExchangeRate.js';
import useConversion from '../../hooks/useConversion.js';

// Composants communs
import Card from '../../common/Card/Card.jsx';

// Composants spécifiques
import RateDisplay from '../../components/RateDisplay/RateDisplay.jsx';
import Converter from '../../components/CurrencyConverter/CurrencyConverter.jsx';
import FixedRateControls from '../../components/FixedRateControls/FixedRateControls.jsx';
import ConversionHistory from '../../components/ConversionHistory/ConversionHistory.jsx';

const { Title } = Typography;

const CurrencyConverterPage = () => {
  // Utiliser le hook pour gérer le taux de change
  const { 
    exchangeRate, 
    fixedRate, 
    isFixedRateActive, 
    currentRate, 
    applyFixedRate, 
    disableFixedRate 
  } = useExchangeRate(1.1);

  // État pour l'historique complet
  const [fullHistory, setFullHistory] = useState([]);

  // Utiliser le hook pour gérer les conversions
  const {
    inputValue,
    convertedValue,
    isEuroToDollar,
    history,
    setInputValue,
    toggleDirection
  } = useConversion(currentRate);

  // Mettre à jour l'historique avec les informations complètes
  useEffect(() => {
    if (history.length > 0) {
      const updatedHistory = history.map(item => ({
        ...item,
        realRate: exchangeRate,
        usedRate: currentRate
      }));
      
      setFullHistory(updatedHistory);
    }
  }, [history, exchangeRate, currentRate]);

  return (
    <div className="currency-converter-page">
      <div className="page-content">
        <Card className="converter-card" title={<Title level={2}>Currency Converter</Title>}>
          <RateDisplay 
            exchangeRate={exchangeRate}
            fixedRate={fixedRate}
            isFixedRateActive={isFixedRateActive}
          />

          <Converter
            inputValue={inputValue}
            convertedValue={convertedValue}
            isEuroToDollar={isEuroToDollar}
            onInputChange={setInputValue}
            onDirectionChange={toggleDirection}
          />

          <FixedRateControls
            onApplyFixedRate={applyFixedRate}
            onDisableFixedRate={disableFixedRate}
            isFixedRateActive={isFixedRateActive}
          />

          <ConversionHistory history={fullHistory} />
        </Card>
      </div>
    </div>
  );
};

export default CurrencyConverterPage;