import Parser from "rss-parser";

export class RssComponent {
  private parser: Parser;

  public async fetchRSS(url: string): Promise<Parser.Output> {
    if (this.parser == null || undefined) {
      this.parser = new Parser();
    }
    return await this.parser.parseURL(url);
  }
}
