declare const enum AltPermission {
  NONE,
  SCREEN_CAPTURE,
  WEBRTC,
  CLIPBOARD_ACCESS,
  EXTENDED_VOICE_API,
  All,
}

interface Alt {
  /**
   * Emits specified event across particular client.
   *
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  emit(eventName: string, ...args: any[]): void;

  /**
   * Unsubscribes from client event handler with specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  off(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to client event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  on(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to client event with specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  once(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Gets all the listeners for the specified webview event.
   *
   * @param eventName Name of the event.
   * @returns Array of listener functions for that event.
   */
  getEventListeners(eventName: string): ((...args: any[]) => void)[];

  getVersion(): string;

  getBranch(): string;

  getLocale(): string;

  /**
   * Gets the state of the specified permission.
   *
   * @param permId Permission id.
   * @returns Permission state.
   */
  getPermissionState(permId: AltPermission): boolean;
  getPermissionState<T extends number>(permId: T): boolean;
}

interface Window {
  alt: Alt;
}

declare var alt: Alt;
