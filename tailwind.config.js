module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "aurorathemewagoncomblue-zodiac":
          "var(--aurorathemewagoncomblue-zodiac)",
        aurorathemewagoncombunker: "var(--aurorathemewagoncombunker)",
        aurorathemewagoncomcabaret: "var(--aurorathemewagoncomcabaret)",
        "aurorathemewagoncomcabaret-15": "var(--aurorathemewagoncomcabaret-15)",
        "aurorathemewagoncomcabaret-25": "var(--aurorathemewagoncomcabaret-25)",
        aurorathemewagoncomcardinal: "var(--aurorathemewagoncomcardinal)",
        "aurorathemewagoncomcatskill-white":
          "var(--aurorathemewagoncomcatskill-white)",
        "aurorathemewagoncomcod-gray-bunker":
          "var(--aurorathemewagoncomcod-gray-bunker)",
        "aurorathemewagoncomcornflower-blue":
          "var(--aurorathemewagoncomcornflower-blue)",
        "aurorathemewagoncomdeep-blush": "var(--aurorathemewagoncomdeep-blush)",
        aurorathemewagoncomgallery: "var(--aurorathemewagoncomgallery)",
        "aurorathemewagoncomgull-gray": "var(--aurorathemewagoncomgull-gray)",
        aurorathemewagoncomkeppel: "var(--aurorathemewagoncomkeppel)",
        "aurorathemewagoncomkeppel-15": "var(--aurorathemewagoncomkeppel-15)",
        "aurorathemewagoncomkeppel-25": "var(--aurorathemewagoncomkeppel-25)",
        aurorathemewagoncommalibu: "var(--aurorathemewagoncommalibu)",
        aurorathemewagoncommariner: "var(--aurorathemewagoncommariner)",
        aurorathemewagoncommatisse: "var(--aurorathemewagoncommatisse)",
        aurorathemewagoncommystic: "var(--aurorathemewagoncommystic)",
        "aurorathemewagoncomouter-space":
          "var(--aurorathemewagoncomouter-space)",
        aurorathemewagoncomrajah: "var(--aurorathemewagoncomrajah)",
        "aurorathemewagoncomresolution-blue":
          "var(--aurorathemewagoncomresolution-blue)",
        aurorathemewagoncomshark: "var(--aurorathemewagoncomshark)",
        "aurorathemewagoncomsilver-tree":
          "var(--aurorathemewagoncomsilver-tree)",
        "aurorathemewagoncomslate-gray": "var(--aurorathemewagoncomslate-gray)",
        "aurorathemewagoncomtan-hide": "var(--aurorathemewagoncomtan-hide)",
        "aurorathemewagoncomtan-hide-15":
          "var(--aurorathemewagoncomtan-hide-15)",
        "aurorathemewagoncomtan-hide-25":
          "var(--aurorathemewagoncomtan-hide-25)",
        aurorathemewagoncomtrout: "var(--aurorathemewagoncomtrout)",
        aurorathemewagoncomwoodsmoke: "var(--aurorathemewagoncomwoodsmoke)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "aurora-themewagon-com-plus-jakarta-sans-bold":
          "var(--aurora-themewagon-com-plus-jakarta-sans-bold-font-family)",
        "aurora-themewagon-com-plus-jakarta-sans-bold-upper":
          "var(--aurora-themewagon-com-plus-jakarta-sans-bold-upper-font-family)",
        "aurora-themewagon-com-plus-jakarta-sans-light":
          "var(--aurora-themewagon-com-plus-jakarta-sans-light-font-family)",
        "aurora-themewagon-com-plus-jakarta-sans-medium":
          "var(--aurora-themewagon-com-plus-jakarta-sans-medium-font-family)",
        "aurora-themewagon-com-plus-jakarta-sans-regular":
          "var(--aurora-themewagon-com-plus-jakarta-sans-regular-font-family)",
        "aurora-themewagon-com-plus-jakarta-sans-semibold":
          "var(--aurora-themewagon-com-plus-jakarta-sans-semibold-font-family)",
        "aurora-themewagon-com-plus-jakarta-sans-semibold-upper":
          "var(--aurora-themewagon-com-plus-jakarta-sans-semibold-upper-font-family)",
        "aurora-themewagon-com-semantic-button":
          "var(--aurora-themewagon-com-semantic-button-font-family)",
        "aurora-themewagon-com-semantic-heading-3":
          "var(--aurora-themewagon-com-semantic-heading-3-font-family)",
        "aurora-themewagon-com-semantic-heading-4":
          "var(--aurora-themewagon-com-semantic-heading-4-font-family)",
        "aurora-themewagon-com-semantic-heading-6":
          "var(--aurora-themewagon-com-semantic-heading-6-font-family)",
        "aurora-themewagon-com-semantic-heading-6-title":
          "var(--aurora-themewagon-com-semantic-heading-6-title-font-family)",
        "aurora-themewagon-com-semantic-item":
          "var(--aurora-themewagon-com-semantic-item-font-family)",
        "aurora-themewagon-com-semantic-strong":
          "var(--aurora-themewagon-com-semantic-strong-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
