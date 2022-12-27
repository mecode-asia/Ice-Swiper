import React, { ReactElement, useRef, useState } from "react";
import "./ice-swiper.css";
import { getBreakpoint, useDeviceSize } from "./utils";
import { BreakPointInterface, DefaultBreakpointInterface } from "./types";

interface Props {
  children: ReactElement[];
  breakpoints?: BreakPointInterface[];
  navigator?: boolean;
  defaultBreakpoint: DefaultBreakpointInterface;
}

function IceSwiper({
  children,
  defaultBreakpoint,
  breakpoints,
  navigator = true,
}: Props) {
  const [currentActive, setCurrentActive] = useState<number>(0);

  const listRefItemScroll: React.MutableRefObject<any>[] = [];

  const [width] = useDeviceSize();

  const { slidePerview, spaceBetween, contentWidth, contentHeight } =
    getBreakpoint({
      defaultBreakpoint,
      breakpoints,
      width,
    });

  const widthWrapperSize =
    (slidePerview - 1) * (spaceBetween ?? 0) + slidePerview * contentWidth;

  function navigateItem(forward: boolean) {
    const contentSize = slidePerview;
    let slideTo = forward ? 1 : -1;

    if (forward) {
      if (currentActive + contentSize >= children.length) {
        return;
      } else {
        slideTo = currentActive + contentSize;
      }
    } else {
      if (currentActive - contentSize <= 0) {
        slideTo = 0;
      } else {
        slideTo = currentActive - contentSize;
      }
    }
    listRefItemScroll[slideTo].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
    setCurrentActive(slideTo);
  }

  return (
    <div className="ice-swiper">
      <div
        className="ice-swiper-wrapper hide-scrollbar"
        style={{ width: widthWrapperSize }}
      >
        {children.map((child, i) => {
          const ref = useRef(i);
          listRefItemScroll.push(ref);
          return (
            <div
              key={i}
              ref={listRefItemScroll[i]}
              style={{
                minWidth: `${contentWidth}px`,
                minHeight: `${contentHeight}px`,
                maxWidth: `${contentWidth}px`,
                maxHeight: `${contentHeight}px`,
                marginRight: `${
                  i === children.length - 1 ? 0 : spaceBetween
                }px`,
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
      {navigator && (
        <div className="ice-swiper-navigator">
          <div
            className="ice-swiper-navigator-left"
            onClick={() => navigateItem(false)}
          >
            <div
              className="gg"
              style={{
                minWidth: 30,
                minHeight: 30,
                background: "red",
              }}
            />
          </div>
          <div
            className="ice-swiper-navigator-right"
            onClick={() => navigateItem(true)}
          >
            <div style={{ minWidth: 30, minHeight: 30, background: "red" }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default IceSwiper;
