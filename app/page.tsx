import Image from "next/image";
import Tagline from "@/components/tagline";
import Divider from "@/components/divider";
import Card from "@/components/card";
import CardWrapper from "@/components/cardwrapper";

export default function Home() {
  return (
    <main>
      <Tagline line="ADHDO" />
      <Divider />
      <CardWrapper>
        <Card
          title="Super productivity"
          description="While you wait for ADHDO, here is a great alternative: Super Productivity. I use it daily and it really does the job! You should really consider it as a worthy alternative."
          color={90}
          imageUrl="superproductivity.png"
          projectUrl="https://super-productivity.com/"
          button="Try Super-Productivity"
        />
      </CardWrapper>
    </main>
  );
}
