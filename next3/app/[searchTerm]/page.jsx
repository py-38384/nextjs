import React from 'react'
import getWikiResults from '@/lib/getWikiResults'
import Item from './components/Item'

export async function generateMetadata({ params }){
    const searchTerm = params.searchTerm
    const wikiData = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll('%20',' ')
    if(data?.query?.pages){
        return {
            title: `Search results for "${displayTerm}"`,
            description: `Search results for ${displayTerm}`
        }
    }
    return {
        title: `${displayTerm} Not Found`
    }
}

const SearchResults = async ({ params }) => {
    const searchTerm = params.searchTerm.replaceAll('%20',' ')
    console.log(searchTerm)
    const wikiData = getWikiResults(searchTerm)
    const data = await wikiData
    const results = data?.query?.pages
    console.log(results)
    return (
        <main className='bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'>
            {results ? Object.values(results)
                .map(result => (
                    <Item key={result.pageid} result={result}/>
                ))
                :
                <h2 className='p-2 text-xl'><b>{searchTerm}</b> Not Found</h2>
            }
        </main>
    )
}

export default SearchResults