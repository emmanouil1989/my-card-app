import {prisma} from '../../../../server/utils/prisma'
import * as trpc from '@trpc/server';
import {z} from 'zod';
import { createRouter } from '../createRouter';


export const cardDetailsRouter = createRouter().query('card-details', {
    input: z.object({cardId: z.string()}),
    
    async resolve({input}) {
        const response = await prisma.card.findUnique({
            where: {
                productId: input.cardId
            },
        });
        return {
            card: response,
        };

    }
});