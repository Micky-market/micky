
import React from 'react';
import { TRUST_BADGES } from '../constants';
import type { TrustBadge } from '../types';

const TrustBadgeItem: React.FC<{ badge: TrustBadge }> = ({ badge }) => {
    return (
      <div className="flex flex-col items-center space-y-3 text-center">
        <badge.icon className="h-10 w-10 text-green-600" />
        <span className="text-sm text-gray-600 font-medium">{badge.name}</span>
      </div>
    );
};


const TrustBadges: React.FC = () => {
  return (
    <section className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Trust Badges</h2>
        <div className="flex justify-around items-start max-w-2xl mx-auto">
            {TRUST_BADGES.map((badge) => (
                <TrustBadgeItem key={badge.name} badge={badge} />
            ))}
        </div>
    </section>
  );
};

export default TrustBadges;
