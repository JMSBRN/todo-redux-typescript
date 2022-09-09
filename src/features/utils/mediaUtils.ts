const size = {
  mobileExtraS: "279px",
  mobileS: 320,
  mobileM: 375,
  mobileL: 480,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 1960,
  desktopL: 2560,
  desktopXL: 4440,
  desktopXXL: 8440,
};

export const device = {
  mobileExtraS: `(min-width: ${size.mobileExtraS}px) and (max-width: ${
    size.mobileS - 1
  }px)`,
  mobileS: `(min-width: ${size.mobileS}px) and (max-width: ${
    size.mobileM - 1
  }px)`,
  mobileM: `(min-width: ${size.mobileM}px) and (max-width: ${
    size.mobileL - 1
  }px)`,
  mobileL: `(min-width: ${size.mobileL}px) and (max-width: ${
    size.tablet - 1
  }px)`,
  tablet: `(min-width: ${size.tablet}px) and (max-width: ${size.laptop - 1}px)`,
  laptop: `(min-width: ${size.laptop}px) and (max-width: ${
    size.laptopL - 1
  }px)`,
  laptopL: `(min-width: ${size.laptopL}px) and (max-width: ${
    size.desktop - 1
  }px)`,
  desktop: `(min-width: ${size.desktop}px)and (max-width: ${
    size.desktopL - 1
  }px)`,
  desktopL: `(min-width: ${size.desktopL}px) and (max-width: ${
    size.desktopXL - 1
  }px)`,
  desktopXL: `(min-width: ${size.desktopXL}px) and (max-width: ${size.desktopXXL}px)`,
};
export const deviceExtraLargeFontSize = {
  laptop: "5rem",
  desktopL: "15rem",
  desktopXL: "38rem"
};
export const deviceLargeFontSize = {
  laptop: "5rem",
  desktopL: "12rem",
  desktopXL: "18rem"
};
export const deviceMediumFontSize = {
  laptop: "2rem",
  desktopL: "8rem",
  desktopXL: "15rem"
};
export const deviceSmallFontSize = {
  laptop: "1rem",
  desktopL: "4rem",
  desktopXL: "6rem"
};
export const deviceDefaultFontSize = {
  laptop: "1rem",
  desktopL: "1rem",
  desktopXL: "3rem"
};
export const deviceDefaultZeroPointFiveFontSize = {
  laptop: "1rem",
  desktopL: "1rem",
  desktopXL: "2rem"
};
export const deviceDeafaultZeroPointFiveFontSize = "0.5rem";
