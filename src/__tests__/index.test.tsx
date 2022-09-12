import React from "react";
import Home from "../pages/index";
import { render, screen } from "@testing-library/react";
import { trpc } from "../utils/trpc";
import { Card } from "@prisma/client";
import { TRPCClientErrorLike } from "@trpc/client";
import { DefaultErrorShape } from "@trpc/server";
import { Procedure } from "@trpc/server/dist/declarations/src/internals/procedure";
import { Router } from "@trpc/server/dist/declarations/src/router";
import "@testing-library/jest-dom";
import {
  RefetchOptions,
  RefetchQueryFilters,
  QueryObserverResult,
} from "react-query";
import {
  getReactQueryIsLoading,
  getReactQuerySuccessMockAnswer,
} from "@/tests/utils";

test("Load main page", async () => {
  const cards = [
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
  ];

  const mockFunciton = jest
    .spyOn(trpc, "useQuery")
    .mockReturnValue(getReactQuerySuccessMockAnswer({ cards }));

  render(<Home />);
  const image = screen.getByAltText(cards[0].title);
  expect(mockFunciton).toHaveBeenCalledTimes(1);
  expect(trpc.useQuery).toBeCalledWith(["card-search"]);
  expect(image).toBeInTheDocument();
});

test("is Loading", async () => {
  jest.spyOn(trpc, "useQuery").mockReturnValue(getReactQueryIsLoading());
  render(<Home />);

  const image = screen.getByAltText("loading indicator");
  expect(image).toBeInTheDocument();
});
