import * as trpc from '@trpc/server';
import { z } from 'zod';
export const appRouter = trpc
  .router()
  .query('card-search', {

   async resolve() {
       const response = await fetch("https://moonpig.github.io/tech-test-frontend/search.json");
       const jsonResponse = await response.json() as CardSearch;
      return {
       ...jsonResponse
      };
    },
  });
// export type definition of API
export type AppRouter = typeof appRouter;

export type CardSearch = {
    SearchId: string;
    NumberOfProducts: number;
    Start: number;
    Products:Array<{
        price: {
            Value: number;
            Currency: string;
        },
        SoldOut: number;
        Title: string;
        ProductCategory: {
            ProductCategoryId: number;
            Name: string;
        },
        PhotoUploadCount: number;
        CardShopId: number;
        DirectSmile: boolean;
        DefaultSizeId: number;
        ProductId: number;
        MoonpigProductNo: string;
        TradingFaces: number;
        IsLandScape: number;
        ShorDescription: string;
        Description: string;
        isCustomable: number ;
        IsMultiPack: number;
        SeoPath: string;
        ProductCategoryGroupSeoPath: string;
        ProductLink: Link,
        ProductImage: {
            Link:Link
            MimeType: string;
        }

    }>
}

type Link = {
    Href: string;
    Method: string;
    Rel: string;
    Title: string;
}