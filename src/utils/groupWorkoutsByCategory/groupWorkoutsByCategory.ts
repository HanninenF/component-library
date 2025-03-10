import { WorkoutsType } from "../../App4";

export type GroupedWorkoutType = {
  workout: WorkoutsType;
  showCategory: boolean;
};

export const groupWorkoutsByCategory = (
  workouts: WorkoutsType[]
): GroupedWorkoutType[] => {
  return workouts.reduce<GroupedWorkoutType[]>((acc, workout, index, arr) => {
    const show_category: boolean =
      index === 0 || workout.category !== arr[index - 1].category;
    acc.push({ showCategory: show_category, workout });
    return acc;
  }, []);
};
