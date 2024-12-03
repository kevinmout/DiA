import { Flex, Textarea, TextInput, Tooltip } from "@mantine/core";
import { IconInfoCircleFilled } from "@tabler/icons-react";

export const DamageReport = () => {
  return (
    <div>
      <div>
        <Textarea
          radius="xl"
          autosize
          minRows={10}
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
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <TextInput radius="xl" label="Street" placeholder="" />
        <TextInput radius="xl" label="City" placeholder="" />
      </div>
      <div>
        <TextInput
          radius="xl"
          style={{ width: "30%" }}
          label="House Number"
          placeholder=""
        />
      </div>
    </div>
  );
};
