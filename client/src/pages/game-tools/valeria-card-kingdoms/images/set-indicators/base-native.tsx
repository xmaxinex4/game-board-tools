/* eslint-disable max-len */

import React from "react";

import { SvgXml } from "react-native-svg";

// const styles = StyleSheet.create({
//   iconSize: {
//     width: "16px",
//     height: "16px",
//   },
// });

const xml = `
  <svg version="1.1" viewBox="0.0 0.0 24.0 24.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
    <clipPath id="p.0">
      <path d="m0 0l24.0 0l0 24.0l-24.0 0l0 -24.0z" clip-rule="nonzero"/>
    </clipPath>
    <g clip-path="url(#p.0)">
      <path fill="#000000" fill-opacity="0.0" d="m0 0l24.0 0l0 24.0l-24.0 0z" fill-rule="evenodd"/>
      <path fill="#000000" fill-opacity="0.0" d="m24.0 0l-24.000013 0l0 24.000027l24.000013 0z" fill-rule="evenodd"/>
      <g transform="matrix(-0.12821273470147074 0.0 0.0 0.12667459501103154 27.89520249144787 -2.198402462441152)">
        <clipPath id="p.1">
          <path d="m30.380777 17.354723l187.189 0l0 189.46204l-187.189 0z" clip-rule="evenodd"/>
        </clipPath>
        <image clip-path="url(#p.1)" fill="#000" width="237.0" height="274.0" x="0.0" y="0.0" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
      </g>
    </g>
  </svg>
`;

export function NativeBaseSetIndicator(): React.ReactElement {
  return (
    <SvgXml xml={xml} width="100%" height="100%" />
  );
}