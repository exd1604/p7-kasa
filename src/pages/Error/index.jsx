/* Error page
  Whenever a route is not setup in the router or a housing id is not found, the error page is thrown.
*/

import "../../utils/styles/ErrorStyle.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

function Error() {
  return (
    <div className="error-whole-page">
      <Header />

      <main className="error-container">
        <h1 className="error-container-title">404</h1>
        <p className="error-container-text">
          Oups! La page que vous demandez n'existe pas
        </p>
        <Link to="/" className="error-container-return">
          Retourner sur la page d'accueil
        </Link>
      </main>
    </div>
  );
}

export default Error;
