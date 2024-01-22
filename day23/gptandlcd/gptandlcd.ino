#include <Wire.h>
#include <LiquidCrystal_I2C.h>

#if defined(ARDUINO) && ARDUINO >= 100
#define printByte(args)  write(args);
#else
#define printByte(args)  print(args,BYTE);
#endif

//byte SelfPortrait[8] = {
//  0b00100,
//  0b01110,
//  0b11111,
//  0b11111,
//  0b01110,
//  0b10101,
//  0b10001,
//  0b01110
//};
byte SelfPortrait[8][8] = {
  // Top Row
  {
    0b00000,
    0b01110,
    0b11111,
    0b11111,
    0b01110,
    0b10101,
    0b10001,
    0b01110
  },
  {
    0b00000,
    0b11111,
    0b11111,
    0b00100,
    0b00100,
    0b00100,
    0b00100,
    0b00100
  },
  {
    0b00000,
    0b00100,
    0b00100,
    0b00100,
    0b01110,
    0b00100,
    0b00100,
    0b01110
  },
  {
    0b00000,
    0b01110,
    0b10001,
    0b10001,
    0b01110,
    0b00100,
    0b01110,
    0b00000
  },
  // Bottom Row
  {
    0b01110,
    0b10001,
    0b00000,
    0b00000,
    0b01110,
    0b10001,
    0b10001,
    0b01110
  },
  {
    0b11111,
    0b00100,
    0b00100,
    0b11110,
    0b00100,
    0b00100,
    0b11111,
    0b00000
  },
  {
    0b01110,
    0b10001,
    0b10001,
    0b01111,
    0b00001,
    0b10010,
    0b01100,
    0b00000
  },
  {
    0b01110,
    0b10001,
    0b10001,
    0b11111,
    0b00100,
    0b00100,
    0b11110,
    0b00000
  }
};


  
LiquidCrystal_I2C lcd(0x27,20,4);  // set the LCD address to 0x27 for a 16 chars and 2 line display


void setup() {
  lcd.init();                      // initialize the lcd 
  lcd.backlight();
  for(int j =0; j<8;j++){
    lcd.createChar(j, SelfPortrait[j]);
    
  }
  
   

}

void loop() {
  // put your main code here, to run repeatedly:
  lcd.clear();
  lcd.home();
  
  lcd.print("GPT SelfPortrait...");
  delay(2000);
  lcd.clear();
  lcd.home();
  
  for(int i=0; i<16;i++){
    lcd.setCursor(i,0);
    lcd.write(i%4);
  }
   
  for(int i=0; i<16;i++){
   lcd.setCursor(i,1);
    lcd.write(i%4+4);
  }
  delay(4000);
  
  

}
