import { css } from "styled-components";

import { TOKEN } from "@/styles/tokens";

export function ellipsis(
  lines: number = 1,
  lineHeight = TOKEN.LINE_HEIGHT.DEFAULT
) {
  const commonStyle = css`
    overflow: hidden;
    text-overflow: ellipsis;
  `;

  return lines === 1
    ? css`
        ${commonStyle}
        white-space: nowrap;
      `
    : css`
        ${commonStyle}

        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
        max-height: ${lineHeight * lines}em;
        word-wrap: break-word;
      `;
}

export function customScrollbar(direction?: "x" | "y" | "xy") {
  let scrollDirection = css`
    overflow-x: hidden;
    overflow-y: overlay;
  `;

  if (direction === "x") {
    scrollDirection = css`
      overflow-x: overlay;
      overflow-y: hidden;
    `;
  } else if (direction === "xy") {
    scrollDirection = css`
      overflow: overlay;
    `;
  }

  return css`
    ${scrollDirection}
    scrollbar-width: none;

    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;

      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.scrollbar};
      height: 17%;
      /* 스크롤바 둥글게 설정 */
      border-radius: 10px;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }

    &:hover {
      &::-webkit-scrollbar {
        width: 4px;
        height: 7px;
      }
    }
  `;
}

const HEX = 16;
export function hexToRGB(hex: string, opacity?: number) {
  let hexString = hex.replace("#", "");

  switch (hexString.length) {
    case 1:
      hexString = Array(6 + 1).join(hexString);
      break;
    case 2:
      hexString = Array(3 + 1).join(hexString);
      break;
    case 3:
      hexString = hexString
        .split("")
        .reduce((acc, char) => acc + char + char, "");
      break;
  }

  const r = parseInt(hexString.substring(0, 2), HEX);
  const g = parseInt(hexString.substring(2, 4), HEX);
  const b = parseInt(hexString.substring(4, 6), HEX);

  if (!opacity) return `rgb(${r}, ${g}, ${b})`;

  let a = opacity;
  if (hexString.length === 8) {
    const aString = hexString.substring(6, 8);
    a = Math.floor((parseInt(aString, HEX) / 255) * 1000) / 1000;
  }

  return `rgb(${r}, ${g}, ${b}, ${a})`;
}
