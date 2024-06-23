const plugin = require("tailwindcss/plugin")
const responsiveRegex = require("../../lib/responsiveRegex")
module.exports = {
  content: [{ raw: "" }],
  safelist: responsiveRegex,
  theme: {
    colors: require("../../theming"),
    extend: require("../../lib/utility-classes"),
  },
  plugins: [
    plugin(({ addBase, addUtilities }) => {
      addBase(require("../../../dist/base"))
      addUtilities(require("../../../dist/utilities"), {
        variants: ["responsive"],
      })
    }),
  ],
}
