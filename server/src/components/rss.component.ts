import Parser from "rss-parser";

export class RssComponent {
  private parser: Parser;

  constructor() {
    this.parser = new Parser();
  }

  public async fetchRSS(url: string): Promise<Parser.Output> {
    return await this.parser.parseURL(url);
  }
}
