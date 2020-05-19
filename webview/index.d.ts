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
}

interface Window {
  alt: Alt;
}

declare var alt: Alt;
