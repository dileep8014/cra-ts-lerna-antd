import React from "react";
import AntdButton from "./AntdButton";
import {Meta} from "@storybook/react/types-6-0";

export default {
    title: 'Example/AntdButton',
    component: AntdButton,
} as Meta;

export const basic = () => <AntdButton type="primary" />