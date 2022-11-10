export type TimeBasedEvent = {
  atHour: number;
  nearMinute?: Minute;
  frequency?: {
    type: "everyDays";
    interval: 1;
  };
};

type Minute = 1 | 5 | 10 | 15 | 30;

type Frequency =
  | {
      type: "everyMinutes";
      interval: Minute;
    }
  | {
      type: "everyHours" | "everyDays";
      interval: number;
    };
