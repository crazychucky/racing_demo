
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Camera
 * DateTime = Thu Dec 30 2021 08:58:50 GMT+0800 (中国标准时间)
 * Author = crazychucky
 * FileBasename = Camera.ts
 * FileBasenameNoExtension = Camera
 * URL = db://assets/scripts/Camera.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
let Z_OFF = -10
let Y_OFF = 2
@ccclass('Camera')
export class Camera extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property({ type: Node })
    private player:Node = null

    start () {
        // [3]
    }

    update (deltaTime: number) {
      let pos = this.player.getPosition()
      pos.z = pos.z + Z_OFF
      pos.y = pos.y + Y_OFF
      this.node.setPosition(pos)
        // console.log(this.player.getPosition())
        // this.player.setPosition
        // [4]
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */
