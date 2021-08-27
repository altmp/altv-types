# player.setDateTime

**Description**

Used to set a player's date and time.

Highly recommended to disable player clock on client-side while using this.

**Syntax**

```js
setDateTime(day: DateTimeDay, month: DateTimeMonth, year: number, hour: DateTimeHour, minute: DateTimeMinute, second: DateTimeSecond): void;
```

**Example Usage**

```js
// day, month, year, hour, minute, second
player.setDateTime(24, 1, 1994, 7, 0, 0); // 7 AM on January 24, 1994
```
