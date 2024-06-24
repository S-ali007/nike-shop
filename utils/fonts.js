import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNeueBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeueHeavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeueRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeueThin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeueUltraLight.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});
