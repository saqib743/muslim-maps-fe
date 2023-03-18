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

const calcLocationWidths = (screenSize: string) => {
  switch (screenSize) {
    case "md": {
      return {
        width: "100px",
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
