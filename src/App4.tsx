import React from "react";
import {
  GroupedWorkoutType,
  groupWorkoutsByCategory,
} from "./utils/groupByCategory/groupByCategory";

type WorkoutCategoryRowProps = {
  category: string;
  tableHeadLength: number;
};

function WorkoutCategoryRow({
  category,
  tableHeadLength,
}: WorkoutCategoryRowProps) {
  return (
    <tr>
      <td colSpan={tableHeadLength}> {category} </td>
    </tr>
  );
}

type WorkoutRowProps = {
  workout: WorkoutsType;
};

function WorkoutRow({ workout }: WorkoutRowProps) {
  return (
    <tr>
      <td> {workout.name} </td>
      <td> {workout.duration} min</td>
      <td> {workout.caloriesBurned} kcal</td>
    </tr>
  );
}

export type WorkoutsType = {
  category: string;
  name: string;
  duration: number;
  caloriesBurned: number;
  id: string;
};
type WorkoutTableProps = {
  workouts: WorkoutsType[];
  tableHead: string[];
};

function WorkoutTable({ workouts, tableHead }: WorkoutTableProps) {
  const groupedWorkouts = groupWorkoutsByCategory(workouts);

  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHead.map((head, index) => (
              <th key={`${head}-${index}`}> {head} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groupedWorkouts.map(
            ({ workout, showCategory }: GroupedWorkoutType) => (
              <React.Fragment key={workout.id}>
                {showCategory && (
                  <WorkoutCategoryRow
                    tableHeadLength={tableHead.length}
                    category={workout.category}
                  />
                )}
                <WorkoutRow workout={workout} />
              </React.Fragment>
            )
          )}
        </tbody>
      </table>
    </>
  );
}

export default function App3() {
  const WORKOUTS: WorkoutsType[] = [
    {
      category: "Cardio",
      name: "Running",
      duration: 30,
      caloriesBurned: 300,
      id: "1",
    },
    {
      category: "Cardio",
      name: "Cycling",
      duration: 45,
      caloriesBurned: 400,
      id: "2",
    },
    {
      category: "Cardio",
      name: "Jump Rope",
      duration: 15,
      caloriesBurned: 200,
      id: "3",
    },
    {
      category: "Strength",
      name: "Bench Press",
      duration: 20,
      caloriesBurned: 150,
      id: "4",
    },
    {
      category: "Strength",
      name: "Squats",
      duration: 25,
      caloriesBurned: 200,
      id: "5",
    },
    {
      category: "Strength",
      name: "Deadlift",
      duration: 30,
      caloriesBurned: 250,
      id: "6",
    },
    {
      category: "Flexibility",
      name: "Yoga",
      duration: 40,
      caloriesBurned: 100,
      id: "7",
    },
    {
      category: "Flexibility",
      name: "Stretching",
      duration: 20,
      caloriesBurned: 50,
      id: "8",
    },
  ];

  const tableHead: string[] = ["Name", "Duration", "Calories Burned"];

  return (
    <>
      <WorkoutTable tableHead={tableHead} workouts={WORKOUTS} />
    </>
  );
}
