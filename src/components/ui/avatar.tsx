import React from 'react';

interface AvatarProps {
  name: string;
  src?: string;
  sizeClass?: string; // tailwind width/height e.g., "w-8 h-8"
  className?: string;
}

/**
 * Displays a circular avatar. If `src` is provided, shows the image cropped to circle.
 * Otherwise shows the user's initials over a light background.
 */
const Avatar: React.FC<AvatarProps> = ({ name, src, sizeClass = 'w-8 h-8', className = '' }) => {
  // Get initials (first letter of first two words)
  const initials = React.useMemo(() => {
    const words = name.trim().split(' ');
    const first = words[0]?.charAt(0).toUpperCase() || '';
    const second = words[1]?.charAt(0).toUpperCase() || '';
    return `${first}${second}`;
  }, [name]);

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full overflow-hidden bg-b-50 ${sizeClass} ${className}`}
    >
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-b-400 text-xs font-medium">{initials}</span>
      )}
    </div>
  );
};

export default Avatar; 