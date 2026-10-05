import { siteConfig } from "@/config/site";
import { ConfigurableLink } from "./configurable-link";
import { Icon } from "./icons";

export function ContactButton({ olive = false, trajectory = false }: { olive?: boolean; trajectory?: boolean }) {
  return (
    <ConfigurableLink href={trajectory ? siteConfig.trajectory : siteConfig.whatsapp} className={`button${olive ? " button-olive" : ""}`}>
      <span>{trajectory ? "Conheça minha trajetória" : "Vamos conversar"}</span>
      <Icon name="arrow" />
    </ConfigurableLink>
  );
}
