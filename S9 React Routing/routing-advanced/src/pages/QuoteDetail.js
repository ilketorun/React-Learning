import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "ilke", text: "This quote is AWESOME" },
  { id: "q2", author: "ilke Torun", text: "This quote is MORE AWESOME" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${params.quoteId}/comments`} exact>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
