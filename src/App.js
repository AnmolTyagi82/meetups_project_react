import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./components/pages/AllMeetups";
import NewMeetupPage from "./components/pages/NewMeetup";
import FavoritesPage from "./components/pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetups" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
