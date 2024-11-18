import {
  Center,
  Group,
  Switch,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export const DarkLightButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const colorModeLabels = {
    dark: "Light Mode",
    light: "Dark Mode",
    auto: "Toggle Color",
  };

  return (
    <Group>
      <Center>
        <Tooltip label={colorModeLabels[colorScheme]} position="left">
          <Switch
            onChange={() => toggleColorScheme()}
            size="lg"
            onLabel={<IconSun size={20} stroke={1.5} />}
            offLabel={<IconMoonStars size={20} stroke={1.5} />}
          />
        </Tooltip>
      </Center>
    </Group>
  );
};
