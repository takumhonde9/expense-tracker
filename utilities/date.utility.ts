import moment from "moment";

export class DateUtility {
  private static readableFormat: string = "DD MMM YYYY";

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
    return moment(date, "X").isSame(today, period);
  }

  /**
   * A date in the format DD MMM YYYY e.g. 15 Dec 2014
   * @param date a string representation of a date as a Unix timestamp
   */
  static formatToReadableDate(date: string): string {
    return moment(date, "X").format(this.readableFormat);
  }
}
