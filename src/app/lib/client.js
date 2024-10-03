import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'



  export const client = createClient({
    projectId: 'dks90v2k',
    dataset: 'production',
    apiVersion: '2024-10-03',
    useCdn: true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
  })  



const builder = imageUrlBuilder(client)


export const urlFor = (source) =>  builder.image(source).url();