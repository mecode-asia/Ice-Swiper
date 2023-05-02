import { useEffect, useState } from "react";
import { BreakPointInterface, DefaultBreakpointInterface } from "./types";

export const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width, height];
};

export function getBreakpoint({
  defaultBreakpoint,
  breakpoints,
  width,
}: {
  defaultBreakpoint: DefaultBreakpointInterface;
  breakpoints?: BreakPointInterface[];
  width: number;
}): BreakPointInterface {
  let currentBreakpoint: BreakPointInterface = {
    screen: 0,
    slidePerview: defaultBreakpoint.slidePerview,
    spaceBetween: defaultBreakpoint.spaceBetween,
    contentWidth: defaultBreakpoint.contentWidth,
    contentHeight: defaultBreakpoint.contentHeight,
    sidePaddingNavigator: defaultBreakpoint.sidePaddingNavigator,
    navigator: defaultBreakpoint.navigator,
  };
  let breakpointSort: BreakPointInterface[] = [];
  if (breakpoints) {
    breakpointSort = breakpoints.sort((one, two) =>
      one.screen > two.screen ? -1 : 1
    );
  }

  for (let i = 0; i <= breakpointSort.length - 1; i++) {
    if (width >= breakpointSort[i].screen) {
      currentBreakpoint = breakpointSort[i];
      break;
    }
  }
  return currentBreakpoint;
}
