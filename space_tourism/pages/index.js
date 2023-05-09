import Head from "next/head";
import * as D from "../styles/home";
import { Header } from "./header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
      </Head>
      <D.Container>
        <D.TitleAndButton>
          <D.TitleContainer>
            <D.SecondTitle>So, you want to travel to </D.SecondTitle>
            <D.MainTitle>SPACE</D.MainTitle>
            <D.Paragraphy>
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience.
            </D.Paragraphy>
          </D.TitleContainer>
          <D.Button>Explore</D.Button>
        </D.TitleAndButton>
      </D.Container>
    </>
  );
}
