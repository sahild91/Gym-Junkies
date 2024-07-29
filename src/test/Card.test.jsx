import { screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "../utils/test-utils";
import App from "../App";
import jsonData from "../DB/exerciseData.json";


describe("Card Component", () => {

    it("should render all names of the Guides", async () => {
        render(<App/>, { route: "/GuidePage" });

        const exercisesData = [];
        for (const muscleGroup in jsonData.muscleGroups) {
            jsonData.muscleGroups[muscleGroup].forEach((data) => {
                exercisesData.push(data.exercise);
            });
        }

        exercisesData.forEach(async (exercise) => {
            const findExerciseName = await screen.getByText(exercise);
            expect(findExerciseName).toBeDefined();
        });
    });

});