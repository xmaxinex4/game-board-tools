/* eslint-disable max-len */

import React from "react";

export interface HexIconProps {
  fill?: string;
  height?: number;
  width?: number;
  className?: string;
}

export function HexIcon(props: HexIconProps): React.ReactElement {
  const {
    fill,
    height,
    width,
    className,
  } = props;

  return (
    <svg className={className || ""} height={height ? `${height}px` : "250px"} width={width ? `${width}px` : "250px"} fill={fill || "#000000"} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.0 0.0 168.65879265091863 168.21784776902888" stroke="none" strokeLinecap="square" strokeMiterlimit="10">
      <clipPath id="p.0">
        <path d="m0 0l168.6588 0l0 168.21785l-168.6588 0l0 -168.21785z" clipRule="nonzero" />
      </clipPath>
      <g clip-path="url(#p.0)">
        <path fill="#000000" fillOpacity="0.0" d="m0 0l168.6588 0l0 168.21785l-168.6588 0z" fillRule="evenodd" />
        <path fill="#67daff" d="m0.32939634 84.10761l42.0 -83.99996l84.0 0l41.999992 83.99996l-41.999992 83.99996l-84.0 0z" fillRule="evenodd" />
        <path stroke="#67daff" strokeWidth="1.0" strokeLinejoin="round" strokeLinecap="butt" d="m0.32939634 84.10761l42.0 -83.99996l84.0 0l41.999992 83.99996l-41.999992 83.99996l-84.0 0z" fillRule="evenodd" />
      </g>
    </svg>
  );
}
