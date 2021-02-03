export class MyUtils {
  public getRandomValue(): string {
    return "Random 1: " + Math.random();
  }

  public setFilter() {
    (window as any)._mp.clientApi.components.filters.Filename.setFilterValue({
      value: "foo",
      displayName: "bar"
    });
  }
}
