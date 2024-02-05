# ไลบรารี Line Notify Wrapper

โมดูลนี้ให้บริการการจัดการ LINE Notify API ใน Node.js อย่างง่าย ๆ ทำให้คุณสามารถส่งข้อความและไฟล์ไปยัง LINE Notify ได้โดยง่าย

## การติดตั้ง

ตรวจสอบว่าคุณมี Node.js ติดตั้งในเครื่องของคุณแล้ว ในการติดตั้ง dependencies ที่จำเป็นใช้, ให้ใช้คำสั่ง:

```npm i nodejs-line-notify```

## การใช้งาน

### นำเข้าโมดูล

```const LineNotify = require('nodejs-line-notify');``` 

### สร้างอินสแตนซ์

```const lineNotify = new LineNotify('YOUR_LINE_NOTIFY_TOKEN');``` 

แทน `'YOUR_LINE_NOTIFY_TOKEN'` ด้วย token จริงที่คุณได้รับจาก LINE Notify.

### ตรวจสอบสถานะ

``` 
lineNotify.checkStatus()
  .then((status) => {
    console.log('สถานะ Line Notify:', status);
  })
  .catch((error) => {
    console.error('เกิดข้อผิดพลาดในการตรวจสอบสถานะ Line Notify:', error);
  });
```

### ส่งข้อความ

```const message = 'สวัสดี LINE Notify!';
lineNotify.sendMessage(message)
  .then((response) => {
    console.log('ส่งข้อความสำเร็จ:', response);
  })
  .catch((error) => {
    console.error('เกิดข้อผิดพลาดในการส่งข้อความ:', error);
  });
 ``` 

### ส่งไฟล์ (รูปภาพ)

```const message = 'มาดูรูปภาพนี้!';
const imagePath = 'path/to/your/image.jpg';
lineNotify.sendFile(message, imagePath)
  .then((response) => {
    console.log('ส่งไฟล์สำเร็จ:', response);
  })
  .catch((error) => {
    console.error('เกิดข้อผิดพลาดในการส่งไฟล์:', error);
  });
  ``` 

แทน `'path/to/your/image.jpg'` ด้วยที่อยู่จริงของไฟล์รูปภาพที่คุณต้องการส่ง.

## หมายเหตุ

-   ตรวจสอบให้แน่ใจว่าคุณมีสิทธิ์ในการอ่านไฟล์ที่ต้องการส่ง
-   สำหรับการส่งไฟล์, มีการรองรับหลายประเภทของไฟล์ ไม่จำกัดเพียงรูปภาพเท่านั้น

## ใบอนุญาต

โปรเจกต์นี้ได้รับอนุญาตภายใต้ MIT License - ดูไฟล์ LICENSE สำหรับรายละเอียดเพิ่มเติม