'use client';

import { useScrollDirection } from '../hooks/useScrollDirection';

export function Header() {
  const scrollDirection = useScrollDirection(400);
  const topClass = scrollDirection === 'down' ? '-top-16' : 'top-0';

  return (
    <>
      <div
        className={`sticky ${topClass} h-16 bg-black transition-all duration-500`}
      >
        <div className="p-5 font-bold text-white">Disappearing Header</div>
      </div>
    </>
  );
}
