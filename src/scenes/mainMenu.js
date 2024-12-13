import k from "../kaplayCtx";


export default function mainMenu(){
    if(!k.getData("best-score")) k.setData("best-score", 0);
    k.onButtonPress("jump", () => k.go("game"));

    
    
};