// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class OnKeyboardEventScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    eventName = "";
    /* START-USER-CODE */
    awake() {
        if (!this.eventName) {
            return;
        }
        this.scene.input.keyboard?.on(this.eventName, () => {
            this.executeChildren();
        });
    }
}
/* END OF COMPILED CODE */
// You can write more code here

