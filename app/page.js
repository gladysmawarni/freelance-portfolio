// app/page.js  (or pages/index.js if using Pages Router)
import Portfolio from "@/components/Portfolio";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Gladys — Analytics Engineer",
  description: "Analytics Engineer-Digital PR Freelancer",
};

export default function Page() {
  return <Portfolio />;
}
