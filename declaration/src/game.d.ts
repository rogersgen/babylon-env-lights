import "babylonjs-materials";
import "babylonjs-procedural-textures";
import "babylonjs-loaders";
import "babylonjs-gui";
import { Engine, Scene } from "babylonjs";
export default class Game {
    engine: Engine;
    canvas: HTMLCanvasElement;
    scene: Scene;
    /**
     * Constructor
     */
    constructor();
    /**
     * Runs the game
     */
    run(): void;
}
