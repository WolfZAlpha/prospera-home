// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkIcon from "@mui/icons-material/Link";

// PROSPERA DEFI PLATFORM React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "PROSPERA",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <TwitterIcon />,
      link: "https://x.com/prosperadefi",
    },
    {
      icon: <TelegramIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <LinkIcon />,
      link: "https://linktr.ee/prosperaDEFI",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.prosperadefi.com/pages/company/about-us" },
        { name: "Foundation", href: "https://www.prosperadefi.com/pages/company/foundation" },
      ],
    },
    {
      name: "apps",
      items: [
        { name: "virtual reality", href: "https://vr.prosperadefi.com" },
        { name: "dashboard", href: "https://dashboard.prosperadefi.com" },
      ],
    },
    {
      name: "Docs",
      items: [
        { name: "white paper", href: "https://www.prosperadefi.com/whitepaper.pdf" },
        {
          name: "substack",
          href: "https://prosperadefi.substack.com?utm_source=navbar&utm_medium=web",
        },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.prosperadefi.com/pages/support/contact-us" },
        { name: "faq", href: "https://www.prosperadefi.com/pages/support/faq" },
        { name: "terms & conditions", href: "https://www.prosperadefi.com/terms" },
        { name: "privacy", href: "https://www.prosperadefi.com/pages/support/privacy" },
      ],
    },
  ],
  copyright: (
    <MKTypography color="white" variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} PROSPERA by{" "}
      <MKTypography
        component="a"
        color="pros"
        href="https://www.prosperadefi.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Z
      </MKTypography>
      .
    </MKTypography>
  ),
};
