import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StrategiesPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/strategies/list');
  }, [navigate]);

  return null;
};

export default StrategiesPage; 