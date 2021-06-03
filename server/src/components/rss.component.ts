import Parser, { Item } from "rss-parser";
import { Thumbnail } from "../entities/di";

export interface DiItem extends Item {
  thumbnail?: Thumbnail & {
    "media:description": string[];
  };
}

export interface DiOutput extends Parser.Output {
  items?: Item[] & DiItem;
}

export class RssComponent {
  private parser: Parser;

  constructor() {
    this.parser = new Parser({
      customFields: {
        item: [["media:content", "thumbnail"]],
      },
    });
  }

  public async fetchRSS(url: string): Promise<Parser.Output> {
    return await this.parser.parseURL(url);
  }
}
