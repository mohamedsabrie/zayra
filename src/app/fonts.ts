import { Volkhov, Poppins, Jost } from "next/font/google";

export const volkhov = Volkhov({
  subsets: ["latin"],
  variable: "--font-volkhov",
  weight: "400",
});
export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});
export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  // weight: "400",
});
