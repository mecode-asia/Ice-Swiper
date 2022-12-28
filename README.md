# Ice Swiper

## Features
 - Support Customize Navigator Button
 - Responsive friendly Breakpoint Support

## Development Build
 * ยังบ่อได้ทำ รอ pair กับพี่ Tino

## Example
ตัวอย่างการใช้งานเบื้องต้น
```ts
<IceSwiper
    minimumBreakpoint={{
       contentWidth: 200,
       contentHeight: 200,
       slidePerview: 1,
       spaceBetween: 0,
       navigator: false,
       sidePaddingNavigator: 0,
     }}
     breakpoints={[
       {
         screen: 1024,
         contentWidth: 300,
         contentHeight: 300,
         slidePerview: 3,
         spaceBetween: 20,
         navigator: true,
         sidePaddingNavigator: 100,
       },
       {
         screen: 738,
         contentWidth: 240,
         contentHeight: 240,
         slidePerview: 2,
         spaceBetween: 20,
         navigator: true,
         sidePaddingNavigator: 100,
       },
     ]}
   >
     <div style={{ background: "red", height: "100%", display: "flex" }}>
       <p style={{ margin: "auto" }}>asdasdasdasd</p>
     </div>
     <div style={{ background: "green", height: "100%" }}>Item1</div>
     <div style={{ background: "purple", height: "100%" }}>Item2</div>
     <div style={{ background: "blue", height: "100%" }}>Item3</div>
     <div style={{ background: "pink", height: "100%" }}>Item4</div>
 </IceSwiper>

```
