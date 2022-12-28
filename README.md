# Ice Swiper
<p align="center">
 <img src="https://user-images.githubusercontent.com/64627561/209756946-34e1888f-aa47-450d-aa20-4da51708a7f9.jpeg"/>
</p>

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

<img width="1396" alt="Screen Shot 2565-12-28 at 10 54 24" src="https://user-images.githubusercontent.com/64627561/209754765-a4cf0a5d-b9eb-4d06-9c12-83126f096407.png">


----------

## Breakpoint

ตัวอย่างการกำหนด breakpoint

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
     {...}
 </IceSwiper>

```

Attributes Breakpoints
| Attribute   | Type                                       | Description                                                                                             |
| -------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| screen  | number                                        | ขนาดของหน้าจอ (ไม่มีใน Attribute MinimumBreakpoint เพราะไม่ได้ต้องกำหนดขนาดหน้าจอ)                                                                               |
| contentWidth    | number                           | ขนาดของ Width (Pixel) ของ Content                                                                                            |
| contentHeight | number                    | ขนาดของ Height (Pixel) ของ Content                                                                                      |
| slidePerview   |  number                 | จำนวน Content ที่ต้องการแสดง ต่อ 1 Slide                                                                                   |
| spaceBetween (optional) | number                     | ระยะห่างระหว่าง Content (Pixel)                                                                                            |
| sidePaddingNavigator (optional) | number                       | ระยะ Padding ซ้ายขวาของ Navigator Button (Pixel)  |
| navigator     | boolean                  | แสดง Navigator Button     |


## Custom Navigator Button

ตัวอย่างการ เปลี่ยน Navigator Button

```ts
<IceSwiper
    navigatorButton={{
      backward: (
        <div
          style={{
            width: 40,
            eight: 40,
            background: "green",
            borderRadius: "100%",
          }}
        ></div>
      ),
      forward: (
        <div
           style={{
            width: 40,
            height: 40,
            background: "red",
            borderRadius: "100%",
          }}
        ></div>
      ),
    }}
    minimumBreakpoint={{
      ...
    }}
    breakpoints={[
      ....
    ]}
  >
....
</IceSwiper>

```

# Output

<img width="1399" alt="Screen Shot 2565-12-28 at 11 18 34" src="https://user-images.githubusercontent.com/64627561/209756622-c6f2b055-ccc6-4c83-b234-40539e46b2ae.png">
