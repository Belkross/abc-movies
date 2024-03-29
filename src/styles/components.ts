import { Theme, ThemeOptions } from "@mui/material";

export function createMuiComponents(theme: Theme): ThemeOptions {
  return {
    components: {
      MuiButton: {
        defaultProps: {
          variant: "outlined",
          disableFocusRipple: true,
        },
        variants: [
          {
            props: { variant: "outlined" },
            style: {
              backgroundColor: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              boxShadow: theme.shadows[2],
            },
          },
        ],
        styleOverrides: {
          root: {
            padding: "12px 12px",
            color: theme.palette.text.primary,
            width: "max-content",
            height: "max-content",
            ":disabled": {
              backgroundColor: theme.palette.action.disabledBackground,
              borderColor: theme.palette.action.disabled,
            },
            ":focus": {
              backgroundColor: "inherit",
            },
          },
        },
      },
      MuiIconButton: {
        defaultProps: { disableFocusRipple: true },
        styleOverrides: {
          root: {
            borderRadius: theme.shape.borderRadius,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.main,
            boxShadow: theme.shadows[2],
            ":disabled": {
              borderColor: theme.palette.action.disabled,
            },
          },
        },
      },
    },
  };
}
