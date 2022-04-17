// our-domain.com/news

import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  console.log(newsId);

  // we can send request to backend api
  // to get related info abouth the newsId page

  return <h1>This is Details Page</h1>;
};

export default DetailsPage;
