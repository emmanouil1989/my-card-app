import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import axios from 'axios';
type CardSearch = {
    SearchId: string;
    NumberOfProducts: number;
    Start: number;
    Products:Array<{
        Price: {
            Value: number;
            Currency: string;
        },
        SoldOut?: number;
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
        ProductImage:{
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
export const fillDB = async () => {
    const response = await axios.get<CardSearch>("https://moonpig.github.io/tech-test-frontend/search.json");

    try{
        const mappedData:Array<Prisma.CardCreateManyInput> = response.data.Products.map((product) => ({
            title: product.Title,
            description: product.Description,
            price: product.Price.Value.toString(),
            currency: product.Price.Currency,
            productId: product.MoonpigProductNo,
            imageLink:product.ProductImage.Link.Href,
        }))
       const creation = await prisma.card.createMany({
            data: mappedData
       });
    }catch(e){
        console.log(e, "error");
    }



}

fillDB();
