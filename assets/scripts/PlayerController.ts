
import { _decorator, Component, Vec3, Collider, input, Input, ICollisionEvent, EventKeyboard, RigidBody, CCBoolean } from 'cc';
import { KeyCode } from 'cc';
const { ccclass, property } = _decorator;


enum DIR {
  FORWARD,
  BACKWARD,
  LEFT,
  RIGHT
}

let FORCE = 10

@ccclass('PlayerController')
export class PlayerController extends Component {
  /* class member could be defined like this */
  // dummy = '';

  /* use `property` decorator if your want the member to be serializable */
  // @property
  // serializableDummy = 0;

  @property({ type: Array(CCBoolean) })
  private _dirFlags = []

  @property({ type: RigidBody })
  private rigidBody = null

  start() {
    for (let key in DIR) {
      this._dirFlags[key] = false
    }
    let com = this.getComponent(Collider)
    com.on('onCollisionEnter', this.onCollision, this)
  }

  private onCollision(event: ICollisionEvent) {
    let oc = event.otherCollider
    let ocName = oc.node.name
    if(ocName != "Ground"){
      console.log(oc)
    }
  }

  onLoad() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
  }

  onDestroy() {
    input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
  }

  onKeyDown(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.ARROW_LEFT:
      case KeyCode.KEY_A:
        this._dirFlags[DIR.LEFT] = true
        break;
      case KeyCode.KEY_D:
      case KeyCode.ARROW_RIGHT:
        this._dirFlags[DIR.RIGHT] = true
        break;
    }
  }
  onKeyUp(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.ARROW_LEFT:
      case KeyCode.KEY_A:
        this._dirFlags[DIR.LEFT] = false
        break;
      case KeyCode.KEY_D:
      case KeyCode.ARROW_RIGHT:
        this._dirFlags[DIR.RIGHT] = false
        break;
    }
  }


  update(deltaTime: number) {
    if (this._dirFlags[DIR.LEFT]) {
      this.rigidBody.applyForce(new Vec3(FORCE, 0, 0));
    }
    else if (this._dirFlags[DIR.RIGHT]) {
      this.rigidBody.applyForce(new Vec3(-FORCE, 0, 0));
    }
  }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
