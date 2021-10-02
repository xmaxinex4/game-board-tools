/* eslint-disable max-len */

import React from "react";

export interface MeepleGroupIconProps {
  fill?: string;
}

export function MeepleGroupIcon(props: MeepleGroupIconProps): React.ReactElement {
  const { fill } = props;
  return (
    <svg height="25px" width="25px" fill={fill || "#000"} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.0 0.0 154.28608923884514 163.85301837270342" stroke="none" strokeLinecap="square" strokeMiterlimit="10">
      <clipPath id="p.0">
        <path d="m0 0l154.28609 0l0 163.85301l-154.28609 0l0 -163.85301z" clipRule="nonzero" />
      </clipPath>
      <g clipPath="url(#p.0)">
        <path fill="#000000" fillOpacity="0.0" d="m0 0l154.28609 0l0 163.85301l-154.28609 0z" fillRule="evenodd" />
        <g filter="url(#shadowFilter-p.1)">
          <use xlinkHref="#p.1" transform="matrix(1.0 0.0 0.0 1.0 0.0 2.0)" />
        </g>
        <defs>
          <filter id="shadowFilter-p.1" filterUnits="userSpaceOnUse">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2.0" result="blur" />
            <feComponentTransfer in="blur" colorInterpolationFilters="sRGB">
              <feFuncR type="linear" slope="0" intercept="0.0" />
              <feFuncG type="linear" slope="0" intercept="0.0" />
              <feFuncB type="linear" slope="0" intercept="0.0" />
              <feFuncA type="linear" slope="0.5" intercept="0" />
            </feComponentTransfer>
          </filter>
        </defs>
        <g id="p.1">
          <path fill="#000000" fillOpacity="0.0" d="m-32.0 0l151.0 0l0 86.0l-151.0 0z" fillRule="evenodd" />
          <g transform="matrix(1.0 0.0 0.0 1.0 -32.0 0.0)">
            <clipPath id="p.2">
              <path d="m0 0l151.0 0l0 86.0l-151.0 0z" clipRule="evenodd" />
            </clipPath>
            <image clipPath="url(#p.2)" fill="#000" width="151.0" height="86.0" x="0.0" y="0.0" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
          </g>
        </g>
        <g filter="url(#shadowFilter-p.3)">
          <use xlinkHref="#p.3" transform="matrix(1.0 0.0 0.0 1.0 0.0 2.0)" />
        </g>
        <defs>
          <filter id="shadowFilter-p.3" filterUnits="userSpaceOnUse">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2.0" result="blur" />
            <feComponentTransfer in="blur" colorInterpolationFilters="sRGB">
              <feFuncR type="linear" slope="0" intercept="0.0" />
              <feFuncG type="linear" slope="0" intercept="0.0" />
              <feFuncB type="linear" slope="0" intercept="0.0" />
              <feFuncA type="linear" slope="0.5" intercept="0" />
            </feComponentTransfer>
          </filter>
        </defs>
        <g id="p.3">
          <path fill="#000000" fillOpacity="0.0" d="m37.485565 14.005249l151.0 0l0 86.0l-151.0 0z" fillRule="evenodd" />
          <g transform="matrix(1.0 0.0 0.0 1.0 37.48556430446194 14.005249343832022)">
            <clipPath id="p.4">
              <path d="m-7.1054274E-15 0l151.0 0l0 86.0l-151.0 0z" clipRule="evenodd" />
            </clipPath>
            <image clipPath="url(#p.4)" fill="#000" width="151.0" height="86.0" x="0.0" y="0.0" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
          </g>
        </g>
        <g filter="url(#shadowFilter-p.5)">
          <use xlinkHref="#p.5" transform="matrix(1.0 0.0 0.0 1.0 0.0 2.0)" />
        </g>
        <defs>
          <filter id="shadowFilter-p.5" filterUnits="userSpaceOnUse">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2.0" result="blur" />
            <feComponentTransfer in="blur" colorInterpolationFilters="sRGB">
              <feFuncR type="linear" slope="0" intercept="0.0" />
              <feFuncG type="linear" slope="0" intercept="0.0" />
              <feFuncB type="linear" slope="0" intercept="0.0" />
              <feFuncA type="linear" slope="0.5" intercept="0" />
            </feComponentTransfer>
          </filter>
        </defs>
        <g id="p.5">
          <path fill="#000000" fillOpacity="0.0" d="m-10.275591 78.0l151.0 0l0 86.0l-151.0 0z" fillRule="evenodd" />
          <g transform="matrix(1.0 0.0 0.0 1.0 -10.275590551181102 78.0)">
            <clipPath id="p.6">
              <path d="m0 0l151.0 0l0 86.0l-151.0 0z" clipRule="evenodd" />
            </clipPath>
            <image clipPath="url(#p.6)" fill="#000" width="151.0" height="86.0" x="0.0" y="0.0" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
          </g>
        </g>
      </g>
    </svg>
  );
}
