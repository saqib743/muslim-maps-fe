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
    case "placeDescriptions":
      return calcPlaceDescriptionsMargins(screenSize);
  }
};

const calcPlaceDescriptionsMargins = (screenSize: string) => {
  switch (screenSize) {
    case "md": {
      return {
        margin: "0px 10px 0px 0px",
      };
    }
    case "lg": {
      return {
        margin: "0px 15px 0px 0px",
      };
    }
    case "xl": {
      return {
        margin: "0px 20px 0px 0px",
      };
    }
    case "xxl": {
      return {
        margin: "0px 25px 0px 0px",
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
