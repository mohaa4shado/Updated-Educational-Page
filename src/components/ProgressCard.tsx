import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

interface ProgressCardProps {
  title: string;
  lessonCount: number;
  completedLessons: number;
  disciplinePercentage: number;
  variant: 'blue' | 'green';
  icon: React.ReactNode;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  lessonCount,
  completedLessons,
  disciplinePercentage,
  variant,
  icon
}) => {
  return (
    <Card className={`stat-card ${variant === 'blue' ? 'blue-card' : 'green-card'} h-100`}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>{icon}</div>
          <h5 className="card-title mb-0">{title}</h5>
        </div>
        
        <div className="text-center my-3">
          <h4 className="mb-0">الدروس</h4>
        </div>
        
        <div className="d-flex justify-content-between mb-3">
          <div className="text-center">
            <h6>للمتابعة</h6>
            <h3>{completedLessons}</h3>
          </div>
          <div className="text-center">
            <h6>المجموع</h6>
            <h3>{lessonCount}</h3>
          </div>
        </div>
        
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="progress-label">الانضباط</div>
            <div className="progress-label">{disciplinePercentage}%</div>
          </div>
          <ProgressBar 
            now={disciplinePercentage} 
            variant={variant === 'blue' ? 'info' : 'success'} 
            className="mt-1" 
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProgressCard;