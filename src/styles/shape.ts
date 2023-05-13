const shapeUtils = {
  spacingBase: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
  borderRadius: 2.5,
};

export const shape = {
  ...shapeUtils,

  borderedContainer: {
    padding: shapeUtils.spacingBase,
    backgroundColor: "background.paper",
    borderWidth: { xs: "2px", md: "3px" },
    borderStyle: "solid",
    borderColor: "background.border",
    borderRadius: shapeUtils.borderRadius,
    boxShadow: 6,
  },
};
