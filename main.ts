//% weight=0 color=#00e3e3 icon="\uf40d" block="Practice"
namespace practice {
    /**
    * 指定伺服馬達慢慢轉動一定角度
    */
    
    //% blockId="servoMovement" block="servo pin %pin|angle from %angle1|to %angle2|in %times secs"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function servoMovement(pin: AnalogPin, angle1: number = 0, angle2: number = 180, times: number = 1): void {
        let turn = 0
        let pauseTime = 0

        if (angle1 < angle2) {
            turn = 1
        } else if (angle1 == angle2) {
            turn = 0
        } else {
            turn = -1
        }

        pauseTime = (((angle1-angle2)*turn*-1)/times)*1000

        
        if (angle1 != angle2) {
            for (let i = angle1; i <= angle2; i += i*turn) {
                pins.servoWritePin(pin, i)
                basic.pause(pauseTime)

            }
        }
    }
}