/* eslint-disable @next/next/no-img-element */
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { useRef, useState } from 'react';

const ImageMagnifier = ({
  src,
  className,
  width,
  height,
  alt,
  magnifierHeight = 150,
  magnifierWidth = 150,
  zoomLevel = 3,
}: {
  src: string;
  className?: string;
  width: number;
  height: number;
  alt: string;
  magnifierHeight?: number;
  magnifierWidth?: number;
  zoomLevel?: number;
}) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);
  const ref = useRef<HTMLImageElement | null>(null);

  const mouseEnter = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const el = e.currentTarget;

    const { width, height } = el.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  const mouseLeave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault();
    setShowMagnifier(false);
  };

  const mouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const el = e.currentTarget;
    const { top, left } = el.getBoundingClientRect();

    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    setXY([x, y]);
  };

  console.log(ref.current?.x, ref.current?.y);

  return (
    <div className="relative inline-block w-fit">
      <Image
        ref={ref}
        src={src}
        className={cn(['object-cover', className])}
        width={width}
        height={height}
        alt={alt}
        sizes={'100vh'}
        onMouseEnter={(e) => mouseEnter(e)}
        onMouseLeave={(e) => mouseLeave(e)}
        onMouseMove={(e) => mouseMove(e)}
      />
      <div
        style={{
          display: showMagnifier ? '' : 'none',
          position: 'fixed',
          pointerEvents: 'none',
          height: `${magnifierHeight}px`,
          width: `${magnifierWidth}px`,
          opacity: '1',
          border: '1px solid lightgrey',
          backgroundColor: 'white',
          borderRadius: '5px',
          backgroundImage: `url('${src}')`,
          backgroundRepeat: 'no-repeat',
          top: `148px`,
          left: ref?.current ? ref?.current?.x + width + 16 : 0,
          backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
          backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      />
    </div>
  );
};

export default ImageMagnifier;
