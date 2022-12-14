import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { SectionImage, SectionImageProps } from "./SectionImage.component";

export default {
  title: "molecules/SectionImage",
  component: SectionImage,
} as Meta;

const Template: Story<SectionImageProps> = (args) => <SectionImage {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
