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

  /**
   * Emits specified event across particular client.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emit(eventName: string, ...args: any[]): void;

  /**
   * Subscribes to client event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to a custom client event with the specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function once(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Unsubscribes from client event handler with specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  export function off(eventName: string, listener: (...args: any[]) => void): void;

  export { log, logWarning, logError, setTimeout, setInterval, nextTick, clearTimeout, clearInterval, clearNextTick, hash, version, branch, sdkVersion, debug, File, RGBA, Vector3, Vector2 } from "alt-client";
}
