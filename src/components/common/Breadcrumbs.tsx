import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  /**
   * List of breadcrumb labels in order. The last item represents the current page.
   */
  items: string[];
  /** Optional additional class names */
  className?: string;
}

/**
 * Non-interactive breadcrumb trail. All items are rendered as plain text with
 * a chevron separator. The last item (current page) is styled with `b-200`
 * while the preceding items use `n-300`.
 */
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  if (!items?.length) return null;

  return (
    <nav
      aria-label="breadcrumb"
      className={`flex items-center text-sm font-normal ${className}`.trim()}
    >
      {items.map((label, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <span className={isLast ? 'text-b-200' : 'text-n-300'}>{label}</span>
            {!isLast && (
              <ChevronRight className="mx-2 h-4 w-4 text-n-300" aria-hidden />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs; 