import { Container } from "@twk-ui-lib/react";
import {
  ContainerStyleType,
  FlexContainAlign,
  FlexFlow,
  GapSize,
} from "@twk-ui-lib/react/lib/template/Container/Type";
import mount from "featured/FeaturedProductApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return (
    <Container
      refObject={ref}
      type={ContainerStyleType.FLEX}
      flexFlow={FlexFlow.ROW}
      flexContentAlign={FlexContainAlign.CENTER}
      flexGap={GapSize.EXTRA_EXTRA_SMALL}
      children={undefined}
    />
  );
};
