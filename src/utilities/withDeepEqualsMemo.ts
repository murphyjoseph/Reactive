import React, { FC, memo } from "react";
import isEqual from "lodash/isEqual";

export const withDeepEqualsMemo = <T extends any>(WrappedComponent: FC<T>) => memo(WrappedComponent, isEqual);
