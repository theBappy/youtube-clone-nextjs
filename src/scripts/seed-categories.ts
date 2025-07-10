
// todo: create a script to seed category
import { db } from "@/db"
import { categories } from "@/db/schema"
const categoryNames = [
    'Cars and vehicles',
    'Comedy',
    'Education',
    'Gaming',
    'Entertainment',
    'Film and animation',
    'How-to and style',
    'Music',
    'Politics',
    'People and blogs',
    'Pets and animals',
    'Science and technology',
    'Sports',
    'Travel and events'
]
async function main(){
    console.log('Seeding categories...')

    try {
        const values = categoryNames.map((name) => ({
            name, 
            description: `Videos related to ${name.toLowerCase()}`
        }))

    await db.insert(categories).values(values)

    console.log('Categories seeded successfully')

    } catch (error) {
        console.log('Error seeding categories', error)
        process.exit(1)
    }
}
main()