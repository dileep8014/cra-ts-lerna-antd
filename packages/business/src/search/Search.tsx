import React, { useRef } from "react";
import { Input } from "antd";
import styles from "./Search.module.less";
import { ReactComponent as SearchIcon } from "./search.svg";
import classNames from "classnames";
import LoadingOutlined from "@ant-design/icons/LoadingOutlined";

export interface SearchProps {
  onSearch: (value?: string) => void;
  loading?: boolean;
  size?: "small" | "large" | "mini";
  placeholder?: string;
  className?: string;
}

// TODO： loading。
export default function Search({
  loading,
  size = "small",
  onSearch,
  className,
  ...restProps
}: SearchProps) {
  const inputRef = useRef<Input>(null);

  function handleSearch() {
    if (loading) {
      return;
    }
    if (onSearch) {
      onSearch(inputRef.current?.input.value);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "") {
      onSearch(e.target.value);
    }
  }

  function renderSuffix() {
    if (loading) {
      return <LoadingOutlined />;
    }
    return <SearchIcon className={styles.searchIcon} onClick={handleSearch} />;
  }

  return (
    <Input
      ref={inputRef}
      className={classNames([
        styles.container,
        { [styles.large]: size === "large" },
        { [styles.small]: size === "small" },
        { [styles.mini]: size === "mini" },
        className
      ])}
      type="search"
      allowClear
      {...restProps}
      suffix={renderSuffix()}
      onPressEnter={handleSearch}
      onChange={handleChange}
    />
  );
}
