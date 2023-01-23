import { BodyZaya } from "./componentsZaya/body";
import { FooterZaya } from "./componentsZaya/footer";
import { HeaderZaya } from "./componentsZaya/header";
import { NavbarZaya } from "./componentsZaya/navbar";

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
