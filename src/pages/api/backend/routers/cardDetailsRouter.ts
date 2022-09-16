import {prisma} from '../../../../server/utils/prisma'
import * as trpc from '@trpc/server';
import {z} from 'zod';
import { createRouter } from '../createRouter';


export const cardDetailsRouter = createRouter().query('card-details', {
    input: z.object({cardId: z.string()}),
    
    async resolve({input}) {

        try{
            const response = await prisma.card.findUnique({
                where: {
                    productId: input.cardId
                },
            });
            if(!response) {
                throw new trpc.TRPCError({
                    code: 'NOT_FOUND',
                    message: 'Card not found',
                })
            }
            return {
                card: response,
            };
        } catch(e){
                throw new trpc.TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'there was an error with fetching card details',
                    cause: e,
                })            
        }
   

    }
});