/// <reference types="@altv/types-client"/>
/**
 * @module alt-worker
 */
declare module "alt-worker" {
  /**
   * Retrieves the shared array buffer instance with the given id.
   * 
   * @remarks This function will throw an error if an invalid id was passed.
   * @param id The id of the shared array buffer.
   * @returns The shared array buffer instance.
   */
  export function getSharedArrayBuffer(id: number): SharedArrayBuffer;

  export {
    on, once, emit, log, logWarning, logError, setTimeout, setInterval, nextTick, clearTimeout, clearInterval, clearNextTick, hash,
    version, branch, sdkVersion, debug,
    File, RGBA, Vector3, Vector2
  } from "alt-client";
}
