import {
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#edeef0", "#141414")(props),
      },
      html: {
        minW: 320,
      },
      "#root": {
        minH: "100vh",
      },
    }),
  },
});

export default theme;
