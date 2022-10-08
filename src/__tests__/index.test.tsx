import React from "react";
import Home from "../pages/index";
import { cleanup, render, screen } from "@testing-library/react";
import { trpc } from "../utils/trpc";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import {
  getReactQueryIsLoading,
  getReactQuerySuccessMockAnswer,
} from "@/test/utils";

beforeEach(async () => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  useRouter.mockImplementation(() => ({
    route: "/",
    pathname: "",
    query: { limit: "10", page: "1" },
    asPath: "",
    push: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
    beforePopState: jest.fn(() => null),
    prefetch: jest.fn(() => null),
  }));
});

test("Load main page", async () => {
  const cards = {
    page: 1,
    limit: 10,
    totalResults: 2,
    results: [
      {
        id: "008c24f1-cae8-46d1-81b8-92c63d5243fd",
        title: "Photo Anniversary Card",
        price: "3.49",
        currency: "£",
        description:
          "Photo Anniversary Card - Happy Anniversary - 6 photos to upload",
        productId: "pue202",
        imageLink:
          "https://moonpig.github.io/tech-test-frontend/image/pue202/0.jpg",
        createdAt: "2022-09-05T12:44:25.656Z",
      },
      {
        id: "021c6e70-bb96-478d-83ed-a30a1262fcac",
        title: "Baby Shark song photo upload kids Birthday card",
        price: "3.49",
        currency: "£",
        description: "Baby Shark photo upload Birthday card",
        productId: "bsk001",
        imageLink:
          "https://moonpig.github.io/tech-test-frontend/image/bsk001/0.jpg",
        createdAt: "2022-09-05T12:44:25.656Z",
      },
    ],
  };

  const mockFunciton = jest
    .spyOn(trpc, "useQuery")
    .mockReturnValue(getReactQuerySuccessMockAnswer({ ...cards }));

  render(<Home />);
  const image = screen.getByAltText(cards.results[0].title);
  expect(mockFunciton).toHaveBeenCalledTimes(1);
  await expect(trpc.useQuery).toBeCalledTimes(1);

  expect(image).toBeInTheDocument();
  cleanup();
});

test("is Loading", async () => {
  jest.spyOn(trpc, "useQuery").mockReturnValue(getReactQueryIsLoading());
  render(<Home />);

  const image = screen.getByAltText("loading indicator");
  expect(image).toBeInTheDocument();
  cleanup();
});

test("Test search input", async () => {
  const cards = {
    page: 1,
    limit: 10,
    totalResults: 2,
    results: [
      {
        id: "008c24f1-cae8-46d1-81b8-92c63d5243fd",
        title: "Photo Anniversary Card",
        price: "3.49",
        currency: "£",
        description:
          "Photo Anniversary Card - Happy Anniversary - 6 photos to upload",
        productId: "pue202",
        imageLink:
          "https://moonpig.github.io/tech-test-frontend/image/pue202/0.jpg",
        createdAt: "2022-09-05T12:44:25.656Z",
      },
      {
        id: "021c6e70-bb96-478d-83ed-a30a1262fcac",
        title: "Baby Shark song photo upload kids Birthday card",
        price: "3.49",
        currency: "£",
        description: "Baby Shark photo upload Birthday card",
        productId: "bsk001",
        imageLink:
          "https://moonpig.github.io/tech-test-frontend/image/bsk001/0.jpg",
        createdAt: "2022-09-05T12:44:25.656Z",
      },
    ],
  };

  jest
    .spyOn(trpc, "useQuery")
    .mockReturnValue(getReactQuerySuccessMockAnswer({ ...cards }));
  render(<Home />);

  expect(screen.getByRole("textbox")).toBeInTheDocument();
  await userEvent.type(screen.getByRole("textbox"), "Birthday");
   await expect(trpc.useQuery).toBeCalledTimes(9);

  expect(screen.getByRole("textbox")).toHaveValue("Birthday");
});
