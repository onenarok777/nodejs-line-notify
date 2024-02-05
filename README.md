# ไลบรารี Line Notify

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
checkStatus()
```

### ส่งข้อความ

```const message = 'สวัสดี LINE Notify!';
sendMessage(message)
 ``` 

### ส่งไฟล์ (รูปภาพ)

```const message = 'มาดูรูปภาพนี้!';
sendFile(message, imagePath)
  ``` 

## หมายเหตุ

-   ตรวจสอบให้แน่ใจว่าคุณมีสิทธิ์ในการอ่านไฟล์ที่ต้องการส่ง
-   สำหรับการส่งไฟล์, มีการรองรับหลายประเภทของไฟล์ ไม่จำกัดเพียงรูปภาพเท่านั้น

## ใบอนุญาต

โปรเจกต์นี้ได้รับอนุญาตภายใต้ MIT License - ดูไฟล์ LICENSE สำหรับรายละเอียดเพิ่มเติม