import React from "react";
import AntdCommonButton from "./AntdCommonButton";
import {Meta} from "@storybook/react/types-6-0";

export default {
    title: 'Example/AntdCommonButton',
    component: AntdCommonButton,
} as Meta;

export const basic = () => <AntdCommonButton type="primary" />