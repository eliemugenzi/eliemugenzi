import { z, defineCollection } from 'astro:content';

const skillsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        Languages: z.array(z.string()),
        Frameworks: z.array(z.string()),
        DevOps: z.array(z.string()),
        Database: z.array(z.string()),
    })
})

export const collections = {
    skills: skillsCollection,
}