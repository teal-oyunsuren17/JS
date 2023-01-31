import { BodyZaya } from "./body";
import { FooterZaya } from "./footer";
import { HeaderZaya } from "./header";
import { NavbarZaya } from "./navbar";
import "../client.css";

export function ClientZaya() {
  return (
    <div>
      <NavbarZaya />
      <HeaderZaya />
      <BodyZaya />
      <FooterZaya />
    </div>
  );
}
