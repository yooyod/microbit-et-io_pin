
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

 //--------- Enum valiable----------------------   

const enum IOPin 
{

    P0  =  3,  //number of pin internal MCU
    P1  =  2,
    P2  =  1,
    P3  =  4,
    P4  =  5,
    P5  = 17,
    P6  = 12,
    P7  = 11,
    P8  = 18, 
    P9  = 10,
    P10 =  6,
    P11 = 26,
    P12 = 20,
    P13 = 23,
    P14 = 22,
    P15 = 21,
    P16 = 16,
    //% block="(P19 Read only)"
    P19 =  0,
    //% block="(P20 Read only)"
    P20 = 30,

};  //enum

const enum  PinMode 
{
    //% block="down"
    PullDown = 0,
    //% block="up"
    PullUp =   1,
    //% block="none"
    PullNone = 2,
};

/**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   ++                            Custom blocks                     ++
   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//% weight=125 color="#FFCC00" icon="\uf22c"    

namespace IO_Pin
{  

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ++                                Sub CustomBox                                   ++
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/** 
 *   Function: Set Pull-UP IO Pin.
 *     Input : IOPin(P0-P20) ,mode=Pull down,up,none:0,1,2 
 */
   
//%block="Set IO Pin:%Pn = Pull%mode" 
//%Pn.fieldEditor="gridpicker"
//%Pn.fieldOptions.columns=4
//%Pn.fieldOptions.tooltips="false"
//%Pn.fieldOptions.width="250"
//%weight=90

    export function SetIOpin(Pn:IOPin,mode:PinMode): void 
    {
        let _IO;
      
        switch (Pn) 
        {
                case IOPin.P0 : _IO = DigitalPin.P0 ; break;
                case IOPin.P1 : _IO = DigitalPin.P1 ; break;
                case IOPin.P2 : _IO = DigitalPin.P2 ; break;
                case IOPin.P3 : _IO = DigitalPin.P3 ; break;
                case IOPin.P4 : _IO = DigitalPin.P4 ; break;
                case IOPin.P5 : _IO = DigitalPin.P5 ; break;
                case IOPin.P6 : _IO = DigitalPin.P6 ; break;
                case IOPin.P7 : _IO = DigitalPin.P7 ; break;
                case IOPin.P8 : _IO = DigitalPin.P8 ; break;
                case IOPin.P9 : _IO = DigitalPin.P9 ; break;
                case IOPin.P10: _IO = DigitalPin.P10; break;
                case IOPin.P11: _IO = DigitalPin.P11; break;
                case IOPin.P12: _IO = DigitalPin.P12; break;
                case IOPin.P13: _IO = DigitalPin.P13; break;
                case IOPin.P14: _IO = DigitalPin.P14; break;
                case IOPin.P15: _IO = DigitalPin.P15; break;
                case IOPin.P16: _IO = DigitalPin.P16; break;
                case IOPin.P19: _IO = DigitalPin.P19; break;
                case IOPin.P20: _IO = DigitalPin.P20; break;
                
                default:       _IO = DigitalPin.P0; break;
        }   

        if(mode == PinMode.PullDown)
            pins.setPull(_IO,0)  ;

        if(mode == PinMode.PullUp)
            pins.setPull(_IO,1)  ;

        if(mode == PinMode.PullNone)
            pins.setPull(_IO,2)  ;
      
    }


/** 
 *   Function: Digital Read. 
 *     Input : IOPin(P0-P20)  
 *    Return : number 0 or 1
*/
   
//%block="Read IO Pin:%Pn" blockGap=8
//%Pn.fieldEditor="gridpicker"
//%Pn.fieldOptions.columns=4
//%Pn.fieldOptions.tooltips="false"
//%Pn.fieldOptions.width="250"
//%weight=80

    export function ReadIOpin(Pn:IOPin): number 
    {
        let _IO;
      
        switch (Pn) 
        {
                case IOPin.P0 : _IO = DigitalPin.P0 ; break;
                case IOPin.P1 : _IO = DigitalPin.P1 ; break;
                case IOPin.P2 : _IO = DigitalPin.P2 ; break;
                case IOPin.P3 : _IO = DigitalPin.P3 ; break;
                case IOPin.P4 : _IO = DigitalPin.P4 ; break;
                case IOPin.P5 : _IO = DigitalPin.P5 ; break;
                case IOPin.P6 : _IO = DigitalPin.P6 ; break;
                case IOPin.P7 : _IO = DigitalPin.P7 ; break;
                case IOPin.P8 : _IO = DigitalPin.P8 ; break;
                case IOPin.P9 : _IO = DigitalPin.P9 ; break;
                case IOPin.P10: _IO = DigitalPin.P10; break;
                case IOPin.P11: _IO = DigitalPin.P11; break;
                case IOPin.P12: _IO = DigitalPin.P12; break;
                case IOPin.P13: _IO = DigitalPin.P13; break;
                case IOPin.P14: _IO = DigitalPin.P14; break;
                case IOPin.P15: _IO = DigitalPin.P15; break;
                case IOPin.P16: _IO = DigitalPin.P16; break;
                case IOPin.P19: _IO = DigitalPin.P19; break;
                case IOPin.P20: _IO = DigitalPin.P20; break;
                
                default:       _IO = DigitalPin.P0; break;
        }   

        return pins.digitalReadPin(_IO) ;
    }

/** 
 *   Function: Digital Write. 
 *     Input : IOPin(P0-P20) ,value= 0 or 1 
 */
   
//%block="Write IO Pin:%Pn = %val" 
//%val.min=0 val.max=1
//%Pn.fieldEditor="gridpicker"
//%Pn.fieldOptions.columns=4
//%Pn.fieldOptions.tooltips="false"
//%Pn.fieldOptions.width="250"
//%weight=70

    export function WriteIOpin(Pn:IOPin,val:number): void
    {
        let _IO;
      
        switch (Pn) 
        {
                case IOPin.P0 : _IO = DigitalPin.P0 ; break;
                case IOPin.P1 : _IO = DigitalPin.P1 ; break;
                case IOPin.P2 : _IO = DigitalPin.P2 ; break;
                case IOPin.P3 : _IO = DigitalPin.P3 ; break;
                case IOPin.P4 : _IO = DigitalPin.P4 ; break;
                case IOPin.P5 : _IO = DigitalPin.P5 ; break;
                case IOPin.P6 : _IO = DigitalPin.P6 ; break;
                case IOPin.P7 : _IO = DigitalPin.P7 ; break;
                case IOPin.P8 : _IO = DigitalPin.P8 ; break;
                case IOPin.P9 : _IO = DigitalPin.P9 ; break;
                case IOPin.P10: _IO = DigitalPin.P10; break;
                case IOPin.P11: _IO = DigitalPin.P11; break;
                case IOPin.P12: _IO = DigitalPin.P12; break;
                case IOPin.P13: _IO = DigitalPin.P13; break;
                case IOPin.P14: _IO = DigitalPin.P14; break;
                case IOPin.P15: _IO = DigitalPin.P15; break;
                case IOPin.P16: _IO = DigitalPin.P16; break;
                case IOPin.P19: _IO = DigitalPin.P19; break;
                case IOPin.P20: _IO = DigitalPin.P20; break;
                
                default:       _IO = DigitalPin.P0; break;
        }   

       pins.digitalWritePin(_IO,val) ;
    }

} //namespace loop
