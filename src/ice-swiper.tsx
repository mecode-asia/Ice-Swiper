import React, { ReactElement, useEffect, useRef, useState } from "react";
import "./ice-swiper.css";
import { getBreakpoint, useDeviceSize } from "./utils";
import {
  BreakPointInterface,
  DefaultBreakpointInterface as MinimumBreakpointInterface,
} from "./types";

interface Props {
  children: ReactElement[];
  breakpoints?: BreakPointInterface[];
  minimumBreakpoint: MinimumBreakpointInterface;
  navigatorButton?: {
    backward?: ReactElement;
    forward?: ReactElement;
  };
}

function IceSwiper({
  children,
  minimumBreakpoint: defaultBreakpoint,
  breakpoints,
  navigatorButton,
}: Props) {
  const [currentActive, setCurrentActive] = useState<number>(0);

  const listRefItemScroll: React.MutableRefObject<any>[] = [];

  function canDisable(
    contentSize: number,
    currentIndexImage: number,
    maxSize: number,
    forward: boolean
  ) {
    if (forward) {
      if (currentIndexImage + contentSize > maxSize) {
        return true;
      } else {
        return false;
      }
    } else {
      if (currentIndexImage - contentSize < 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  const [width] = useDeviceSize();

  const {
    slidePerview,
    spaceBetween,
    contentWidth,
    contentHeight,
    sidePaddingNavigator,
    navigator,
  } = getBreakpoint({
    defaultBreakpoint,
    breakpoints,
    width,
  });

  useEffect(() => {
    listRefItemScroll[currentActive].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [width]);

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
      inline: "start",
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
          <button
            className="ice-swiper-navigator-left"
            style={{ marginLeft: sidePaddingNavigator }}
            onClick={() => navigateItem(false)}
          >
            {navigatorButton?.backward ?? (
              <div className="ice-swiper-navigator-btn">
                <img
                  width={10}
                  height={12}
                  style={{ margin: "auto" }}
                  src="/arrow-left.svg"
                />
              </div>
            )}
          </button>
          <button
            style={{ marginRight: sidePaddingNavigator }}
            className="ice-swiper-navigator-right"
            onClick={() => navigateItem(true)}
          >
            {navigatorButton?.forward ?? (
              <div className="ice-swiper-navigator-btn">
                <img
                  width={10}
                  height={12}
                  style={{ margin: "auto" }}
                  src="/arrow-right.svg"
                />
              </div>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default IceSwiper;
