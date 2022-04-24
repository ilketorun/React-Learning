// our-domain.com/
import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>This is News Page</h1>
      <ul>
        <li>
          <h1>
            <Link href="/news/nextJS">NextJS</Link>
          </h1>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
