import { Radio, Stack } from "@mantine/core";

export const SeverityReport = () => {
  return (
    <Radio.Group
      name="severity"
      label="Select the severity of the damage"
      description="This will help us to understand the severity of the damage"
      withAsterisk
    >
      <Stack mt="xs">
        <Radio value="excellent" label="Excellent" />
        <Radio value="good" label="Good" />
        <Radio value="fair" label="Fair" />
        <Radio value="mediocre" label="Mediocre" />
        <Radio value="poor" label="Poor" />
        <Radio value="very_poor" label="Very Poor" />
      </Stack>
    </Radio.Group>
  );
};
