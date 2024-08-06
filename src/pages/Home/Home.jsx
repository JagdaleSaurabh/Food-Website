import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import "./home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDashBoard from "../../components/AppDashboard/AppDashBoard";
const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDashBoard />
    </div>
  );
};

export default Home;
