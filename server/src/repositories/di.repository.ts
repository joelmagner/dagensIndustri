import { Arg, Int, Query, Resolver } from "type-graphql";
import { DiItem, RssComponent } from "../components/rss.component";
import { Di } from "../entities/di";

@Resolver(Di)
export class DiRepository {
  @Query(() => [Di] || null)
  async posts(
    @Arg("url") url: string,
    @Arg("limit", () => Int, { nullable: true }) limit: number | null,
    @Arg("order", () => Boolean, { nullable: true }) order: Boolean | null
  ): Promise<Di[] | null> {
    const rss = new RssComponent();
    let data = (await rss.fetchRSS(url)).items?.filter((item: DiItem) => {
      if (item.thumbnail) {
        item.thumbnail.description = item.thumbnail["media:description"][0];
        item.thumbnail.type = Object.values(item.thumbnail)[0].type;
        item.thumbnail.url = Object.values(item.thumbnail)[0].url;
        return item.thumbnail;
      }
      return item;
    }) as unknown as Di[];

    if (!data) {
      return null;
    }

    if (order) {
      data = data.sort(
        (a: Di, b: Di) =>
          new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
      );
    }

    if (limit && limit > 0) {
      data = data.splice(0, limit);
    }

    return data;
  }
}
