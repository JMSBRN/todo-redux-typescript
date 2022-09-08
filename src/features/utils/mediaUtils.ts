const size = {
  mobileExtraS: "279px",
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "480px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1960px",
  desktopL: "2560px",
};

export const device = {
  mobileExtraS: `(min-width: ${size.mobileExtraS}) and (max-width: ${size.mobileS})`,
  mobileS: `(min-width: ${size.mobileS}) and (max-width: ${size.mobileM})`,
  mobileM: `(min-width: ${size.mobileM}) and (max-width: ${size.mobileL})`,
  mobileL: `(min-width: ${size.mobileL}) and (max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
  laptop: `(min-width: ${size.laptop}) and (max-width: ${size.laptopL})`,
  laptopL: `(min-width: ${size.laptopL}) and (max-width: ${size.desktop})`,
  desktop: `(min-width: ${size.desktop})and (max-width: ${size.desktopL})`,
  desktopL: `(min-width: ${size.desktopL}) and (max-width: 4440px)`,
};
export const deviceLargeFontSize = {
  laptop: "5rem",
  desktopL: "6rem",
};
export const deviceMediumFontSize = {
  laptop: "2rem",
  desktopL: "3rem",
};
export const deviceSmallFontSize = {
  laptop: "1rem",
  desktopL: "2rem",
};
export const deviceDeafaultFontSize = {
  laptop: "5rem",
  desktopL: "1rem",
};
export const deviceDeafaultZeroPointFiveFontSize = "0.5rem";
