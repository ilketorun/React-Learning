import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "ilke", text: "This quote is AWESOME" },
  { id: "q2", author: "ilke Torun", text: "This quote is MORE AWESOME" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
