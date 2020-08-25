import React from "react";
import {Button} from "antd";
import { ButtonProps } from "antd/lib/button";
import styles from "./AntdCommonButton.module.less";

interface AntdButtonProps extends ButtonProps {
}

export default function AntdCommonButton(props: AntdButtonProps) {
    return <Button {...props} className={styles.container}>Antd Common Button</Button>;
}
