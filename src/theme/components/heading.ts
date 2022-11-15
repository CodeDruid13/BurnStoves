import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
export const HeadingStyles = {
  components: {
    Heading: {
      baseStyle: {
        field: {
          fontFamily: "Stolzl",
        },
      },

      variants: {
        main: (props: StyleFunctionProps) => ({
          field: {
            fontFamily: "Stolzl",
          },
        }),
      },
    },
  },
};
