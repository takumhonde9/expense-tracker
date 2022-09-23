import moment from "moment";

export class DateUtility {
  private static readableFormat: string = "DD MMM YYYY";
  private static unixFormat: string = "X";

  /**
   * Returns a unix representation of date
   */
  static getToday(): string {
    return moment().format("X");
  }

  /**
   *
   * @param date a string representation of a date as a Unix timestamp
   * @param period date period of interest `"week" | "day" | "month" | "year"`
   */
  static inPeriod(
    date: string,
    period: "week" | "day" | "month" | "year"
  ): boolean {
    const today = moment();
    return moment(date, this.unixFormat).isSame(today, period);
  }

  /**
   * A date in the format DD MMM YYYY e.g. 15 Dec 2014
   * @param date a string representation of a date as a Unix timestamp
   */
  static formatToReadableDate(date: string): string {
    return moment(date, this.unixFormat).format(this.readableFormat);
  }

  /**
   * A date in the format DD MMM YYYY e.g. 15 Dec 2014
   * @param date a string representation of a date as a Unix timestamp
   */
  static formatToStorableDate(date: Date): string {
    return moment(date).format(this.unixFormat);
  }

  /**
   *
   * @param date
   */
  static toDate(date: string): Date {
    return moment(date, this.unixFormat).toDate();
  }
}
