//libraries/premade components
import React from "react";
import Image from "next/image";
//custom components
import Progress from "./components/Progress";
import Action from "./components/Action";
import Divider from "./components/Divider";
import Headlogo from "./components/Headlogo";
import Todo from "./components/Todo";

//initialize google font
import { Kranky } from "next/font/google";

const kranky = Kranky({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function site() {
  return (
    <div id="site">
      <Headlogo headline="ADHDO" />
      <Divider width="80%" />
      <div
        id="actions"
        className="group/actions mx-auto mb-12 flex h-auto w-min flex-row justify-center justify-self-center overflow-hidden portrait:mb-6"
      >
        <Action icon="add" id="Add" color="#722f37" />
        <Action icon="login" id="Login" color="#4b3f72" />
        <Action icon="credit_card_heart" id="Donate" color="#357266" />
      </div>
      <Todo name="TODO NAME HERE" progress="30%" />
      <Divider width="80%" />
      <div
        id="githublinks"
        className="align-center mx-auto mb-10 flex justify-center"
      >
        <a
          title="view source code"
          href="https://github.com/tectrixdev/ADHDO"
          id="github"
          className="size-10 bg-[url('github.png')] bg-cover bg-center transition-none hover:invert"
        />
      </div>
    </div>
  );
}
