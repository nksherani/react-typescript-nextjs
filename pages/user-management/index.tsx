import UsersGrid from "../../components/user-management/UsersGrid";
import Head from "next/head";

const UsersGridPage: React.FC = (props) => {
  return (
    <>
      <Head>
        <title>User Management</title>
      </Head>
      <UsersGrid></UsersGrid>
    </>
  );
};

export default UsersGridPage;
