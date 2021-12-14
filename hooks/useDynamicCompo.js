import React, { lazy, useCallback, useEffect, useState } from "react";
import * as componentsList from "../components/base";

const useDynamicCompo = ({ components, componentType, isHome }) => {
  return components.map((item, index) => {
    if (componentType === "Hero" && isHome) {
      const View = componentsList[`HeroHome`];
      return <View key={item.id ? item.id : index} {...item} />;
    } else {
      const View =
        componentsList[`${componentType ? componentType : item["component"]}`];
      return <View key={item.id ? item.id : index} {...item} />;
    }
  });
};

export default useDynamicCompo;
