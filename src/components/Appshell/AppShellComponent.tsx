import { AppShell, Burger, Center, Group, Image } from "@mantine/core";
import { NavbarComponent } from "./components/NavbarComponent";
import { MantineLogo } from "@mantinex/mantine-logo";
import Logo from "./components/Logo";

interface Props {
  children: JSX.Element;
}

export const AppShellComponent = (props: Props) => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        breakpoint: "sm",
        width: { base: 100 },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Logo />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Center>
          <NavbarComponent />
        </Center>
      </AppShell.Navbar>
      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  );
};
