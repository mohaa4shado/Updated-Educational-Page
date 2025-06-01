import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Trophy } from 'lucide-react';

interface ChallengeCardProps {
  title: string;
  description: string;
  points: number;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, description, points }) => {
  return (
    <Card className="mb-3 dashboard-challenge">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0 d-flex align-items-center">
            <Trophy size={18} className="text-primary me-2" />
            {title}
          </h5>
          <div className="badge bg-primary">{points} نقطة</div>
        </div>
        <p className="card-text text-muted">{description}</p>
        <Button variant="primary" className="w-100">دخول التحدي</Button>
      </Card.Body>
    </Card>
  );
};

export default ChallengeCard;