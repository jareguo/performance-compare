/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import SkeletonComponent from "./SkeletonComponent"
import SpriteComponent from "./SpriteComponent"
import StartComponent from "./StartComponent"
import UIComponent from "./UIComponent"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=640;
    static height:number=1136;
    static scaleMode:string="fixedwidth";
    static screenMode:string="none";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="StartScene.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=true;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("SkeletonComponent.ts",SkeletonComponent);
        reg("SpriteComponent.ts",SpriteComponent);
        reg("StartComponent.ts",StartComponent);
        reg("UIComponent.ts",UIComponent);
    }
}
GameConfig.init();