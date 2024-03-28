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

const experienceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        link: z.array(z.array(z.string())).optional(),
        date: z.string(),
        description: z.array(z.string()),
        order: z.number(),
        company: z.string(),
    })
})

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        link: z.string(),
        tags: z.array(z.string()).optional(),
        order: z.number(),
        thumbnail: z.string(),
    })
})

export const collections = {
    skills: skillsCollection,
    experience: experienceCollection,
    projects: projectsCollection,
}