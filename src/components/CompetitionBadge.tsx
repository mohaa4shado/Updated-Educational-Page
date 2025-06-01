import React from 'react';
import { Award } from 'lucide-react';

interface CompetitionBadgeProps {
  prizeAmount: string;
  competitionDate: string;
}

const CompetitionBadge: React.FC<CompetitionBadgeProps> = ({ prizeAmount, competitionDate }) => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <div className="competition-badge">
        <div className="badge-icon">
          <Award size={16} />
        </div>
        <div>
          <div className="small">الجائزة</div>
          <div className="prize-amount">{prizeAmount}</div>
        </div>
      </div>
      <div className="text-muted">
        المسابقة تنتهي في {competitionDate}
      </div>
    </div>
  );
};

export default CompetitionBadge;