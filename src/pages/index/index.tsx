import "./index.less";

import React, { useEffect } from "react";

import { Button } from "@antmjs/vantui";
import { View } from "@tarojs/components";

const Index: React.FC = () => {
  useEffect(() => {
    console.log("test");
  });

  const defClick = () => {
    console.log("default");
  };

  return (
    <View>
      <Button type="default" onClick={defClick}>
        默认按钮
      </Button>
      <Button type="primary">主要按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </View>
  );
};
export default Index;
