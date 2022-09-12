const size = {
  mobileExtraS: 279,
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
export const deviceFontSize = {
  mobileExtraS: ".1rem",
  mobileS: ".5rem",
  mobileM: "1rem",
  mobileL: "2rem",
  tablet: "1.8rem",
  laptop: "2rem",
  laptopL: "5rem",
  desktop: "6rem",
  desktopL: "8rem",
  desktopXL: "17rem"
};

