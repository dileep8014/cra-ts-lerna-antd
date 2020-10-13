import * as React from "react";
import { actions } from "@storybook/addon-actions";
import Search from "./Search";

export default {
  component: Search,
  title: "Search"
};
const eventsFromNames = actions("onSearch");

export const base = () => <Search {...eventsFromNames} />;
export const mini = () => <Search size="mini" {...eventsFromNames} />;
export const small = () => <Search size="small" {...eventsFromNames} />;
export const large = () => <Search size="large" {...eventsFromNames} />;
export const placeholder = () => (
  <Search size="large" placeholder="提示" {...eventsFromNames} />
);
export const loading = () => <Search loading {...eventsFromNames} />;
