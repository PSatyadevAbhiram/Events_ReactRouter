import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
function ErrorPage() {
  const error = useRouteError();
  let title = "An error occured";
  let msg = "Something went wrong";

  if (error.status === 500) {
    msg = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found";
    msg = "Could not locate the resource or page";
  }
  return (
    <div>
        <MainNavigation/>
      <PageContent title={title}>
        <p>{msg}</p>
      </PageContent>
    </div>
  );
}

export default ErrorPage;
