import React, { FC } from "react";
import { KlassInterpreter } from '../../services/KlassInterpreter';
import _isFunction from 'lodash/isFunction'

interface Props {
  bindings?:any;
}

export const Patternize: FC<Props> = ({ bindings, children }) => {

  if (!bindings) return <>{children}</>;

  const { href, className, isDisabled } = bindings;

  const klasses = new KlassInterpreter(bindings);
  // console.log(bindings.interpreterKlasses);
  const patternKlasses = [bindings.interpreterKlasses, bindings.internalKlasses, className, ...klasses.getKlasses()].join(' ');
  console.log(patternKlasses)

  const handleClick = (event?: React.SyntheticEvent): void => {
    if (!bindings.onClick) return
    if (!!event) event.preventDefault();
    if (_isFunction(bindings.onClick)) {
      bindings.onClick(event);
    } else {
      console.log(bindings.onClick)
    }
    // if (!!bindings.onClick) bindings.onClick(event);
  };

  const optionalAttributes: React.AllHTMLAttributes<HTMLElement> = {
    ...(!!bindings.kind && bindings.kind === "submit" && { type: bindings.kind }), // todo we don't always want a submit button
    ...(!!href && { href: href }),
    ...(!!bindings.target && { target: bindings.target }),
    ...(!!patternKlasses && { className: patternKlasses }),
    ...(!!bindings.onClick && { onClick: handleClick }),
    ...(!!isDisabled && { disabled: true })
  };

  let Tag = "div"
  if (!!bindings.kind && !href) {
    Tag = bindings.kind
  } else if (!!href) {
    Tag = "a"
  }
  return (
    <Tag {...optionalAttributes}>
      {children}
    </Tag>
  )
}