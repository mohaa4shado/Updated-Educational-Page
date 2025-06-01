import React from 'react';

interface PromoBannerProps {
  imageUrl: string;
  discount: string;
  title: string;
  subtitle: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ imageUrl, discount, title, subtitle }) => {
  return (
    <div className="promo-banner mb-4">
      <img src={imageUrl} alt={title} />
      <div className="discount-badge">{discount}</div>
      <div className="promo-content">
        <h4 className="mb-1">{title}</h4>
        <p className="mb-0">{subtitle}</p>
      </div>
    </div>
  );
};

export default PromoBanner;