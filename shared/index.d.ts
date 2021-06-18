/**
 * @module alt-shared
 */
declare module "alt-shared" {
  export const enum BaseObjectType {
    Player,
    Vehicle,
    Blip,
    WebView,
    VoiceChannel,
    Colshape,
    Checkpoint,
  }

  export const enum FileEncoding {
    Utf8 = "utf-8",
    Utf16 = "utf-16",
    Binary = "binary",
  }

  export interface IVector2 {
    readonly x: number;
    readonly y: number;
  }

  export interface IVector3 {
    readonly x: number;
    readonly y: number;
    readonly z: number;
  }

  export class Vector3 {
    public readonly x: number;

    public readonly y: number;

    public readonly z: number;

    constructor(x: number, y: number, z: number);

    constructor(arr: [number, number, number]);

    constructor(obj: IVector3);

    public get length(): number;

    public toArray(): [number, number, number];

    public add(x: number, y: number, z: number): Vector3;

    public add(value: number): Vector3;

    public add(array: [number, number, number]): Vector3;

    public add(vector: IVector3): Vector3;

    public sub(x: number, y: number, z: number): Vector3;

    public sub(value: number): Vector3;

    public sub(array: [number, number, number]): Vector3;

    public sub(vector: IVector3): Vector3;

    public div(x: number, y: number, z: number): Vector3;

    public div(value: number): Vector3;

    public div(array: [number, number, number]): Vector3;

    public div(vector: IVector3): Vector3;

    /** @beta */
    public dot(x: number, y: number, z: number): Vector3;

    /** @beta */
    public dot(value: number): Vector3;

    /** @beta */
    public dot(array: [number, number, number]): Vector3;

    /** @beta */
    public dot(vector: IVector3): Vector3;

    public mul(x: number, y: number, z: number): Vector3;

    public mul(value: number): Vector3;

    public mul(array: [number, number, number]): Vector3;

    public mul(vector: IVector3): Vector3;

    public negative(): Vector3;

    public normalize(): Vector3;

    public distanceTo(vector: IVector3): number;

    public angleTo(vector: IVector3): Vector3;

    public angleToDegrees(vector: IVector3): Vector3;

    public toRadians(): Vector3;

    public toDegrees(): Vector3;

    public isInRange(vector: IVector3, range: number): boolean;
  }

  /** @beta */
  export class Vector2 {
    public readonly x: number;

    public readonly y: number;

    constructor(x: number, y: number);

    constructor(arr: [number, number]);

    constructor(obj: IVector2);

    public get length(): number;

    public toArray(): [number, number];

    public add(x: number, y: number): Vector2;

    public add(value: number): Vector2;

    public add(array: [number, number]): Vector2;

    public add(vector: IVector2): Vector2;

    public sub(x: number, y: number): Vector2;

    public sub(value: number): Vector2;

    public sub(array: [number, number]): Vector2;

    public sub(vector: IVector2): Vector2;

    public div(x: number, y: number): Vector2;

    public div(value: number): Vector2;

    public div(array: [number, number]): Vector2;

    public div(vector: IVector2): Vector2;

    /** @beta */
    public dot(x: number, y: number): Vector2;

    /** @beta */
    public dot(value: number): Vector2;

    /** @beta */
    public dot(array: [number, number]): Vector2;

    /** @beta */
    public dot(vector: IVector2): Vector2;

    public mul(x: number, y: number): Vector2;

    public mul(value: number): Vector2;

    public mul(array: [number, number]): Vector2;

    public mul(vector: IVector2): Vector2;

    public negative(): Vector2;

    public normalize(): Vector2;

    public distanceTo(vector: IVector2): number;

    public angleTo(vector: IVector2): Vector2;

    public angleToDegrees(vector: IVector2): Vector2;

    public toRadians(): Vector2;

    public toDegrees(): Vector2;

    public isInRange(vector: IVector2, range: number): boolean;
  }

  export class RGBA {
    /** r component of RGBA */
    public r: number;
    /** g component of RGBA */
    public g: number;
    /** b component of RGBA */
    public b: number;
    /** a component of RGBA */
    public a: number;

    /**
     * @param r An r component.
     * @param g An g component.
     * @param b An b component.
     * @param a An a component.
     */
    constructor(r: number, g: number, b: number, a: number);
  }

  export class File {
    /**
     * Determines whether file exists with the specified filename.
     *
     * @param filename The name of the file.
     * @returns Return is dependent on whether file with the specified filename exists.
     */
    public static exists(filename: string): boolean;

    /**
     * Reads content of the file.
     *
     * @param filename The name of the file.
     * @param encoding The encoding of the file. If not specified, it defaults to "utf-8".
     */
    public static read(filename: string, encoding?: FileEncoding.Utf8 | FileEncoding.Utf16): string;

    /**
     * Reads content of the file.
     *
     * @param filename The name of the file.
     * @param encoding The encoding of the file.
     */
    public static read(filename: string, encoding: FileEncoding.Binary): ArrayBuffer;
  }

  export class BaseObject {
    /**
     * Type of the object.
     */
    public readonly type: BaseObjectType;

    /**
     * Object usability.
     *
     * @returns False if object is no longer usable.
     */
    public readonly valid: boolean;

    /**
     * Removes the object from the world.
     */
    public destroy(): void;

    /**
     * Removes the specified key.
     *
     * @param key The key of the value to remove.
     */
    public deleteMeta(key: string): void;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key.
     */
    public getMeta(key: string): any;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True when element associated with the specified key is stored.
     */
    public hasMeta(key: string): boolean;

    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared locally.
     *
     * @param key The key of the value to store.
     */
    public setMeta(key: string, value: any): void;
  }

  /**
   * Resource name of the executing resource.
   */
  export const resourceName: string;

  /**
   * Represents the current version.
   *
   * @remarks It's a slighty modified semantic versioning specification, which can be matched using this regular expression pattern `^(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))$`.
   */
  export const version: string;

  /**
   * Represents the current SDK version.
   *
   * @remarks It's the version of the SDK the current runtime was compiled with.
   */
  export const sdkVersion: number;

  /**
   * Represents the current branch.
   */
  export const branch: string;

  /**
   * Returns if the resource is in debug mode.
   *
   * @returns True when the resource is launched with debug mode enabled.
   *
   * @beta
   */
  export const debug: boolean;

  /**
   * Removes the specified key.
   *
   * @param key The key of the value to remove.
   */
  export function deleteMeta(key: string): void;

  /**
   * Gets a value using the specified key.
   *
   * @param key The key of the value to get.
   * @returns Dynamic value associated with the specified key.
   */
  export function getMeta(key: string): any;

  /**
   * Determines whether contains the specified key.
   *
   * @param key The key of the value to locate.
   * @returns True when element associated with the specified key is stored.
   */
  export function hasMeta(key: string): boolean;

  /**
   * Stores the given value with the specified key.
   *
   * @remarks The given value will be shared locally to all resources.
   *
   * @param key The key of the value to store.
   */
  export function setMeta(key: string, value: any): void;

  /**
   * Gets a value using the specified key.
   *
   * @param key The key of the value to get.
   * @returns Dynamic value associated with the specified key.
   */
  export function getSyncedMeta(key: string): any;

  /**
   * Determines whether contains the specified key.
   *
   * @param key The key of the value to locate.
   * @returns Return is dependent on whether element associated with the specified key is stored.
   */
  export function hasSyncedMeta(key: string): boolean;

  /**
   * Clears a timer set with the {@link everyTick} function.
   *
   * @param id The id of a timer.
   */
  export function clearEveryTick(id: number): void;

  /**
   * Clears a timer set with the {@link setInterval} function.
   *
   * @param id The id of a timer.
   */
  export function clearInterval(id: number): void;

  /**
   * Clears a timer set with the {@link nextTick} function.
   *
   * @param id The id of a timer.
   */
  export function clearNextTick(id: number): void;

  /**
   * Clears a timer set with the {@link setTimeout} function.
   *
   * @param id The id of a timer.
   */
  export function clearTimeout(id: number): void;

  /**
   * @hidden
   */
  export function clearTimer(id: number): void;

  /**
   * Emits specified event across resources.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emit(eventName: string, ...args: any[]): void;

  /**
   * Schedules execution of handler on every tick/every frame.
   *
   * @param handler Handler that should be scheduled for execution.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearEveryTick} function to cancel the timer.
   */
  export function everyTick(handler: (...args: any[]) => void): number;

  /**
   * Creates a hash using Jenkins one-at-a-time algorithm.
   *
   * @param str A string from which hash will be created.
   */
  export function hash(str: string): number;

  /**
   * Returns whether the specified resource exists.
   *
   * @param name Name of the resource.
   *
   * @beta
   */
  export function hasResource(name: string): boolean;

  /**
   * Logs the specified arguments to the console.
   */
  export function log(...args: any[]): void;

  /**
   * Logs the specified arguments as an error to the console.
   */
  export function logError(...args: any[]): void;

  /**
   * Logs the specified arguments as a warning to the console.
   */
  export function logWarning(...args: any[]): void;

  /**
   * Schedules execution of handler on next tick/next frame.
   *
   * @param handler Handler that should be scheduled for execution.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearNextTick} function to cancel the timer.
   */
  export function nextTick(handler: (...args: any[]) => void): number;

  /**
   * Unsubscribes from a event with the specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed to.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  export function off(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to all events with the specified listener.
   *
   * @remarks Listener will be only called for user-created events.
   *
   * @param listener Listener that should be added.
   *
   * @beta
   */
  export function on(listener: (eventName: string, ...args: any[]) => void): void;

  /**
   * Subscribes to all events with the specified listener, which only triggers once.
   *
   * @remarks Listener will be only called for user-created events.
   *
   * @param listener Listener that should be added.
   *
   * @beta
   */
  export function once(listener: (eventName: string, ...args: any[]) => void): void;

  /**
   * Schedules execution of handler in specified intervals.
   *
   * @param handler Handler that should be scheduled for execution.
   * @param miliseconds The time, in milliseconds, between execution of specified handler.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearInterval} function to cancel the timer.
   */
  export function setInterval(handler: (...args: any[]) => void, miliseconds: number): number;

  /**
   * Schedules execution of handler once after the expiration of interval.
   *
   * @param handler Handler that should be scheduled for execution.
   * @param miliseconds The time, in milliseconds, before execution of specified handler.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearTimeout} function to cancel the timer.
   */
  export function setTimeout(handler: (...args: any[]) => void, miliseconds: number): number;
}
