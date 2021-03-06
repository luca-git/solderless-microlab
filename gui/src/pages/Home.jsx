import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import Column from "../components/Column";
import Logo from "../assets/logo.svg";

export function Home(props) {
  const { status } = props;

  return (
    <div className="home-page page">
      <Column span={50}>
        <img
          src={Logo}
          alt="Four Thieves Vinegar Logo"
          style={{ width: "80%", paddingTop: "10%" }}
        />
      </Column>
      <Column span={50}>
        <h2>Welcome!</h2>
        <div className="button-list">
          {status && status.recipe ? (
            //if there's a recipe in progress, give a link to see its status
            //if not, offer option to start reaction
            //doing this ternary operator leads to it showing the
            //second option for up to a second before the server
            //comes back with the status.
            //is this a case for useEffect?
            <div>
              <p>{status.recipe} reaction in progress.</p>
              <Button as={Link} to="/status">
                Resume {status.recipe.toUpperCase()} Reaction
                {/* maybe this would be a good place to preview next step? */}
              </Button>
            </div>
          ) : (
            <Button as={Link} to="/recipes">
              Start a Reaction
            </Button>
          )}

          {/* should this be a verb like 'view recipes' (as opposed to choose one to start) */}
          <Button as={Link} to="/recipes">
            Recipes
          </Button>

          {/* should hardware be test-able mid recipe? maybe there
				should be one home screen for if there is a recipe going,
				and one for if there isn't? or tests could be inside settings? */}
          <Button as={Link} to="/tests">
            Test Hardware
          </Button>
        </div>
      </Column>
    </div>
  );
}
