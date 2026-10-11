import React, { useState } from 'react';

export type MediaKey =
  | 'hero-estate'
  | 'cuisine-ravioli'
  | 'cuisine-pasta'
  | 'cuisine-antipasto'
  | 'cuisine-dessert'
  | 'garden-table'
  | 'interior-dining'
  | 'events-celebration'
  | 'produce-harvest';

interface VisualMediaProps {
  mediaKey: MediaKey;
  alt: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '3:4' | '1:1' | 'auto';
  priority?: boolean;
}

const photoMap: Record<MediaKey, string> = {
  'hero-estate': '/images/hero-estate.jpg',
  'cuisine-ravioli': '/images/cuisine-ravioli.jpg',
  'cuisine-pasta': '/images/cuisine-pasta.jpg',
  'cuisine-antipasto': '/images/cuisine-antipasto.jpg',
  'cuisine-dessert': '/images/cuisine-dessert.jpg',
  'garden-table': '/images/garden-table.jpg',
  'interior-dining': '/images/interior-dining.jpg',
  'events-celebration': '/images/events-celebration.jpg',
  'produce-harvest': '/images/produce-harvest.jpg',
};

export const VisualMedia: React.FC<VisualMediaProps> = ({
  mediaKey,
  alt,
  className = '',
  aspectRatio = '4:3',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass =
    aspectRatio === '16:9'
      ? 'aspect-[16/9]'
      : aspectRatio === '4:3'
      ? 'aspect-[4/3]'
      : aspectRatio === '3:4'
      ? 'aspect-[3/4]'
      : aspectRatio === '1:1'
      ? 'aspect-square'
      : '';

  const src = photoMap[mediaKey] || '/images/hero-estate.jpg';

  return (
    <div
      className={`relative overflow-hidden bg-stone-900 group select-none ${aspectClass} ${className}`}
    >
      {/* Background placeholder while image is decoding */}
      <div
        className={`absolute inset-0 bg-[#28231F] transition-opacity duration-500 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#263B2D] text-[#F5F0E6] p-6 text-center">
          <span className="font-serif text-lg italic text-[#A4AC76] mb-1">Rossopistacchio</span>
          <p className="text-xs text-stone-300">{alt}</p>
        </div>
      )}

      {/* Editorial Warm Sunlight Film Grading Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

      {/* Subtle Hairline Border */}
      <div className="absolute inset-0 ring-1 ring-inset ring-black/15 pointer-events-none" />
    </div>
  );
};
