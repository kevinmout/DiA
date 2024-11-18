import { Container, Flex, Textarea, TextInput, Tooltip } from "@mantine/core";
import { IconInfoCircleFilled } from "@tabler/icons-react";

export const DamageReport = () => {
  return (
    <Container>
      <Flex align="center" gap="xs">
        <Textarea
          label={
            <Flex align="center" gap="xs">
              List the damage
              <Tooltip label="Information">
                <IconInfoCircleFilled size={18} />
              </Tooltip>
            </Flex>
          }
          placeholder="The damage is..."
        />
      </Flex>
      <TextInput label="Street" placeholder="" />
      <TextInput label="City" placeholder="" />
      <TextInput style={{ width: "70%" }} label="House Number" placeholder="" />
    </Container>
  );
};
