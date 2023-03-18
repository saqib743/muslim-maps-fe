export const calculateResponsiveMargins = (
  component: string,
  screenSize: string
) => {
  switch (component) {
    case "navbar": {
      return calcNavBarMargins(screenSize);
    }
    case "navbar-settings": {
      return calcNavBarSettingsMargins(screenSize);
    }
  }
};

const calcNavBarSettingsMargins = (screenSize: string) => {
  switch (screenSize) {
    case "md": {
      return {
        margin: "0px 5px 0px 5px",
      };
    }
    case "lg": {
      return {
        margin: "0px 0px 0px 10px",
      };
    }
    case "xl": {
      return {
        margin: "0px 0px 0px 15px",
      };
    }
    case "xxl": {
      return {
        margin: "0px 0px 0px 20px",
      };
    }
    default: {
      return {
        marginLeft: "0px",
        marginRight: "0px",
      };
    }
  }
};

const calcNavBarMargins = (screenSize: string) => {
  switch (screenSize) {
    case "md": {
      return {
        margin: "0px 0px 0px 5px",
      };
    }
    case "lg": {
      return {
        margin: "0px 0px 0px 10px",
      };
    }
    case "xl": {
      return {
        margin: "0px 0px 0px 15px",
      };
    }
    case "xxl": {
      return {
        margin: "0px 0px 0px 20px",
      };
    }
    default: {
      return {
        marginLeft: "0px",
        marginRight: "0px",
      };
    }
  }
};

export const calculateResponsiveWidths = (
  component: string,
  screenSize: string
) => {
  switch (component) {
    case "placeDescriptions":
      return calcPlaceDescriptionWidths(screenSize);
    case "restaurantsAndAttractions":
      return calcRestaurantsAndAttractionsWidths(screenSize);
    case "siteInformation":
      return calcSiteInformationWidths(screenSize);
    case "reviewRating":
      return calcReviewRatingWidths(screenSize);
    case "reviewComments":
      return calcReviewCommentsWidths(screenSize);
  }
};

const calcPlaceDescriptionWidths = (screenSize: string) => {
  switch (screenSize) {
    case "md": {
      return {
        width: "80%",
      };
    }
    case "lg": {
      return {
        width: "70%",
      };
    }
    case "xl": {
      return {
        width: "60%",
      };
    }
    case "xxl": {
      return {
        width: "55%",
      };
    }
    default: {
      return {
        width: "50%",
      };
    }
  }
};

const calcRestaurantsAndAttractionsWidths = (screenSize: string) => {
  switch (screenSize) {
    case "md": {
      return {
        width: "50%",
      };
    }
    case "lg": {
      return {
        width: "63%",
      };
    }
    case "xl": {
      return {
        width: "68%",
      };
    }
    case "xxl": {
      return {
        width: "70%",
      };
    }
    default: {
      return {
        width: "70%",
      };
    }
  }
};

const calcSiteInformationWidths = (screenSize: string) => {
  switch (screenSize) {
    case "md": {
      return {
        width: "45%",
      };
    }
    case "lg": {
      return {
        width: "40%",
      };
    }
    case "xl": {
      return {
        width: "30%",
      };
    }
    case "xxl": {
      return {
        width: "30%",
      };
    }
    default: {
      return {
        width: "30%",
      };
    }
  }
};

const calcReviewRatingWidths = (screenSize: string) => {
  switch (screenSize) {
    case "md": {
      return {
        width: "40%",
      };
    }
    case "lg": {
      return {
        width: "42%",
      };
    }
    case "xl": {
      return {
        width: "35%",
      };
    }
    case "xxl": {
      return {
        width: "35%",
      };
    }
    default: {
      return {
        width: "35%",
      };
    }
  }
};

const calcReviewCommentsWidths = (screenSize: string) => {
  switch (screenSize) {
    case "md": {
      return {
        width: "60%",
      };
    }
    case "lg": {
      return {
        width: "60%",
      };
    }
    case "xl": {
      return {
        width: "65%",
      };
    }
    case "xxl": {
      return {
        width: "68%",
      };
    }
    default: {
      return {
        width: "55%",
      };
    }
  }
};
