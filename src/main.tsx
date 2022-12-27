import React from "react";
import ReactDOM from "react-dom/client";
import IceSwiper from "./ice-swiper";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div style={{ width: "100T" }}>
      <IceSwiper
        defaultBreakpoint={{
          contentWidth: 200,
          contentHeight: 200,
          slidePerview: 1,
          spaceBetween: 0,
        }}
        breakpoints={[
          {
            screen: 1024,
            contentWidth: 300,
            contentHeight: 300,
            slidePerview: 3,
            spaceBetween: 20,
          },
          {
            screen: 738,
            contentWidth: 240,
            contentHeight: 240,
            slidePerview: 2,
            spaceBetween: 20,
          },
        ]}
      >
        <div style={{ background: "red", height: "100%" }}>asdasd</div>
        <div style={{ background: "green", height: "100%" }}>asdasd</div>
        <div style={{ background: "purple", height: "100%" }}>asdasd</div>
        <div style={{ background: "blue", height: "100%" }}>asdasd</div>
        <div style={{ background: "pink", height: "100%" }}>asdasd</div>
      </IceSwiper>
    </div>
  </React.StrictMode>
);
