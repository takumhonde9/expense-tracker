import moment from "moment";

export class DateUtility {
  private static readableFormat: string = "DD MMM YYYY";

  /**
   * A date in the format DD MMM YYYY e.g. 15 Dec 2014
   * @param date a string representation of a date as a Unix timestamp
   */
  static formatToReadableDate(date: string): string {
    return moment(date, "X").format(this.readableFormat);
  }
}
