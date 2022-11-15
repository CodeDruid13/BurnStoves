import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
export const selectStyles = {
  components: {
    Select: {
      baseStyle: {
        field: {
          fontWeight: 400,
          borderRadius: "5px",
        },
      },

      variants: {
        main: (props: StyleFunctionProps) => ({
          field: {
            bg: mode("transparent", "navy.800")(props),
            border: "1px solid !important",
            color: mode("secondaryGray.900", "white")(props),
            borderColor: mode("secondaryGray.100", "whiteAlpha.100")(props),
            borderRadius: "5px",
            fontSize: "sm",
            p: "20px",
            _placeholder: { color: "secondaryGray.400" },
          },
        }),
      },
    },
  },
};
