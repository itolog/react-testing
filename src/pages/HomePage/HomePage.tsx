import React from "react";
// TYPES
import { Users } from "../../shared/types";
// HOOKS
import useLazyFetch from "../../shared/hooks/fetch/useLazyFetch";
// STYLES
import styles from "./homePage.module.scss";
// COMPONENTS
import PeopleList from "../../components/PeopleList/PeopleList";

const HomePage = () => {
  const [fetchPeople, { error, loading, data }] = useLazyFetch<Users[]>();

  const handleFetchData = async () => {
    await fetchPeople("/users");
  };

  return (
    <div className={styles.HomePage}>
      <div>
        <h1>HomePage</h1>
        <PeopleList loading={loading} error={error} items={data} />
      </div>
      <aside>
        <button onClick={handleFetchData}>fetch data</button>
      </aside>
    </div>
  );
};

export default HomePage;
