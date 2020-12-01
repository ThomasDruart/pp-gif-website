import { Reset } from "styled-reset";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import GifList from "./components/GifList";
import Random from "./components/Random";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Reset />
      <Header />

      <Switch>
        <Route path="/trending" component={GifList} />
        <Route path="/random" component={Random} />
        <Route exact path="/" component={Main} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

/*

TO DO : 
Fix Each child key // Switch to axios async
Search engine
Composant : no result found + img/gif
Composants : gif / gif list (map) / no gif
Catch Error with popup (react tostify)

Style général ?

*/
