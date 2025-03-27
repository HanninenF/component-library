export type GroupedType<T> = {
  item: T;
  showCategory: boolean;
};

export const groupByCategory = <T extends { category: string }>(
  items: T[]
): GroupedType<T>[] => {
  return items.reduce<GroupedType<T>[]>((acc, item, index, arr) => {
    const show_category: boolean =
      index === 0 || item.category !== arr[index - 1].category;
    acc.push({ showCategory: show_category, item: item });
    return acc;
  }, []);
};
