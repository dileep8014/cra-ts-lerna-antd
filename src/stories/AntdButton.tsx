import React from "react";
import {Button} from "antd";
import { ButtonProps } from "antd/lib/button";
import styles from "./AntdButton.module.less";

interface AntdButtonProps extends ButtonProps {
}

export default function AntdButton(props: AntdButtonProps) {
    return <Button {...props} className={styles.container}>Hello</Button>;
}
