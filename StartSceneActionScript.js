// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class StartSceneActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    sceneKey = "";
    /* START-USER-CODE */
    execute() {
        this.scene.scene.start(this.sceneKey);
    }
}
/* END OF COMPILED CODE */
// You can write more code here

