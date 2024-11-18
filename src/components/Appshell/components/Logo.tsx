import { Group, Text, useMantineTheme, Image } from "@mantine/core";

const Logo = () => {
  const theme = useMantineTheme();

  return (
    <Group align="center">
      {/* Logo Image */}
      <Image
        src={"./images/kleurrijkwonen.jpg"}
        alt="Logo"
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
        }}
      />
      {/* Brand Text */}
      <Text
        size="xl"
        style={{ color: theme.colors.blue[6], fontFamily: theme.fontFamily }}
      >
        KleurrijkWonen
      </Text>
    </Group>
  );
};

export default Logo;
