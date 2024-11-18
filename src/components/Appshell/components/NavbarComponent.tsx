import { useContext, useState } from "react";
import { AppShell, Stack, Tooltip, UnstyledButton } from "@mantine/core";
import { TablerIcon, IconHome2, IconLogout } from "@tabler/icons-react";
import { DarkLightButton } from "./DarkLightButton";
import { DataContext } from "../../../context/provider/DataProvider";
import clsx from "clsx";
import styles from "./NavbarComponent.styles.module.css";

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
  to: string;
  setPage(page: string): void;
}

function NavbarLink({
  icon: Icon,
  label,
  active,
  onClick,
  setPage,
  to,
}: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right">
      <UnstyledButton
        onClick={() => {
          setPage(to);
          if (onClick) onClick();
        }}
        className={clsx(styles.link, { [styles.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home", to: "home" },
  { icon: IconLogout, label: "Damage Report", to: "damage-report" },
];

export function NavbarComponent() {
  const { setPage } = useContext(DataContext);

  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
      setPage={setPage}
      to={link.to}
    />
  ));

  return (
    <>
      <AppShell.Section grow mt={50}>
        <Stack justify="center" align="center" gap={0}>
          {links}
        </Stack>
        <Stack justify="center" align="center" gap={0}>
          <DarkLightButton />
        </Stack>
      </AppShell.Section>
    </>
  );
}
