import { createRouter } from "../createRouter";
import {prisma} from '../../../../server/utils/prisma'

const cardsSearchRouter = createRouter().query('cards-search', {
    async resolve({ctx}) {
        const response = await prisma.card.findMany();
       return {
        cards: response,
       };
     },
   })



export default cardsSearchRouter;