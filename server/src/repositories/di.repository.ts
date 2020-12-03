import { Arg, Int, Query, Resolver } from "type-graphql";
import { RssComponent } from "../components/rss.component";
import { Di } from "../entities/di.entity";

@Resolver(Di)
export class DiRepository {
  @Query(() => [Di] || null)
  async posts(
    @Arg("url") url: string,
    @Arg("limit", () => Int, { nullable: true }) limit: number | null,
    @Arg("order", () => Boolean, { nullable: true }) order: Boolean | null
  ): Promise<Di[] | null> {
    const rss = new RssComponent();
    let data = ((await rss.fetchRSS(url)).items as unknown) as Di[];

    if (!data) {
      return null;
    }

    if (order) {
      data = data.sort(
        (a: Di, b: Di) =>
          new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
      );
    }

    if (limit) {
      data = data.splice(0, limit);
    }

    return data;
  }
}
