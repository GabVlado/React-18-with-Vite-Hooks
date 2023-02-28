import { useFetch } from "../hooks"
import { LoadingQuote } from "./LoadingQuote"
import { Quote } from "./Quote"


export const MultipleCustomHooks = () => {

    const { data, isLoading, getFetch, hasError } = useFetch('https://lucifer-quotes.vercel.app/api/quotes/1')

    //console.log({ data, isLoading, hasError });

    const  { author, quote} =  !!data && data[0]

    return (
        <>
            <h1>Lucifer quotes </h1>
            <hr />

            {
                isLoading
                    ? (
                        <LoadingQuote />
                    )
                    :(
                        <Quote  author={author} quote={quote} />
                    )
            }

            <button
                className="btn btn-primary"
                onClick={() => getFetch()}
            >
                Next Quote
            </button>
        </>
    )
}
