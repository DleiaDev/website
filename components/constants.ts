// Horizontal gutter shared across pages so the navbar, its menu and page content stay aligned.
export const PAGE_GUTTER = "px-5 sm:px-10 lg:px-20";

// Served from public/
export const CV_HREF = "/Marko_Ilic_CV.pdf";

// Navbar height per breakpoint, exposed as --nav-h. The background grid reads it
// too, so a row line always marks the bottom of the navbar.
export const NAV_HEIGHT =
  "[--nav-h:--spacing(18)] xs:[--nav-h:--spacing(20)] sm:[--nav-h:--spacing(24)] md:[--nav-h:--spacing(28)] xl:[--nav-h:--spacing(32)]";

// Translucent white behind a section's main content. The matching white shadow
// carries it past the edges and fades it out, so the background grid is hidden
// behind the content and eases back in around it.
export const GRID_BACKDROP =
  "bg-white/80 shadow-[0_0_80px_48px_rgb(255_255_255/0.7)]";

// Anchors to the home page sections, shared by the navbar and footer. The
// leading slash keeps them working from any other route.
export const NAV_LINKS = [
  { text: "Experience", path: "/#experience" },
  { text: "Certifications", path: "/#certifications" },
  { text: "Workflow", path: "/#workflow" },
  { text: "Skills", path: "/#skills" },
  { text: "Contact", path: "/#contact" },
];
