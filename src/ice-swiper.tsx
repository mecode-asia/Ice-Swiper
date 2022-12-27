import React, { ReactElement, useEffect, useRef, useState } from "react";
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

  const { slidePerview, spaceBetween, contentWidth, contentHeight } =
    getBreakpoint({
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
          <div
            aria-disabled={canDisable(
              slidePerview,
              currentActive,
              children.length,
              false
            )}
            className="ice-swiper-navigator-left"
            onClick={() => navigateItem(false)}
          >
            <div className="ice-swiper-navigator-btn">
              <img
                width={10}
                height={12}
                style={{ margin: "auto" }}
                src="/arrow-left.svg"
              />
            </div>
          </div>
          <div
            aria-disabled={canDisable(
              slidePerview,
              currentActive,
              children.length,
              true
            )}
            className="ice-swiper-navigator-right"
            onClick={() => navigateItem(true)}
          >
            <div className="ice-swiper-navigator-btn">
              <img
                width={10}
                height={12}
                style={{ margin: "auto" }}
                src="/arrow-right.svg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IceSwiper;
