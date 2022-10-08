import CardDetails from "@/components/CardDetails";
import { trpc } from "@/utils/trpc";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import {
  getReactQueryIsLoading,
  getReactQuerySuccessMockAnswer,
} from "@/test/utils";
import "@testing-library/jest-dom";

beforeEach(async () => {

  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  useRouter.mockImplementation(() => ({
    route: '/',
    pathname: '',
    query: {limit: "10",page: "1"},
    asPath: '',
    push: jest.fn(),
    replace: jest.fn(),

    events: {
      on: jest.fn(),
      off: jest.fn()
    },
    beforePopState: jest.fn(() => null),
    prefetch: jest.fn(() => null)
  }))
});

test("load card details page", async () => {
  const mockData = {
    id: "03a68fb8-4fbb-4684-8766-c21cde1a999a",
    title: "Photo 1st Anniversary Card",
    price: "3.49",
    currency: "£",
    description:
      "Photo Birthday Card Message - General Photo Upload card - blank portrait 6x4",
    productId: "pu1109",
    imageLink:
      "https://moonpig.github.io/tech-test-frontend/image/pu1109/0.jpg",
    createdAt: "2022-09-05T12:44:25.656Z",
  };

  const mockFunciton = jest
    .spyOn(trpc, "useQuery")
    .mockReturnValue(getReactQuerySuccessMockAnswer({ card: mockData }));

  const useRouter = jest
    .spyOn(require("next/router"), "useRouter")
    .mockImplementation(() => ({
      query: { "card-id": "03a68fb8-4fbb-4684-8766-c21cde1a999a" },
    }));
  render(<CardDetails />);
  const image = screen.getByAltText(mockData.title);
  expect(mockFunciton).toHaveBeenCalledTimes(1);
  expect(trpc.useQuery).toBeCalledWith([
    "detail.card-details",
    {
      cardId: "03a68fb8-4fbb-4684-8766-c21cde1a999a",
    },
  ]);
  expect(image).toBeInTheDocument();
  cleanup();
});

test("is card details Loading", async () => {
  jest.spyOn(trpc, "useQuery").mockReturnValue(getReactQueryIsLoading());
  render(<CardDetails />);

  const image = screen.getByAltText("loading indicator");
  expect(image).toBeInTheDocument();
  cleanup();
});
