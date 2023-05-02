import * as H from "../../styles/header";

export function Header() {
  return (
    <H.Header>
      <H.HeaderLine>
        <p>-----------------------------------------</p>
        </H.HeaderLine>
        <H.HeaderOptions>
          <H.List>
            <H.ItensList>HOME</H.ItensList>
            <H.ItensList>DESTINATION</H.ItensList>
            <H.ItensList>CREW</H.ItensList>
            <H.ItensList>TECHONOLOGY</H.ItensList>
          </H.List>
        </H.HeaderOptions>
      
    </H.Header>
  );
}
