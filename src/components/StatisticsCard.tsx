import React from 'react';
import { Card } from 'react-bootstrap';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatisticsCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  positive?: boolean;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ 
  title, 
  value, 
  change, 
  changeLabel, 
  positive = true 
}) => {
  return (
    <Card className="h-100">
      <Card.Body className="text-center">
        <h6 className="text-muted mb-3">{title}</h6>
        <h3 className="mb-2">{value}</h3>
        {change !== undefined && (
          <div className={`d-flex align-items-center justify-content-center ${positive ? 'text-success' : 'text-danger'}`}>
            {positive ? (
              <TrendingUp size={16} className="me-1" />
            ) : (
              <TrendingDown size={16} className="me-1" />
            )}
            <span>{change}%</span>
            {changeLabel && <span className="ms-1 small">({changeLabel})</span>}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default StatisticsCard;