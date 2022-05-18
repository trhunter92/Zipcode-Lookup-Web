import {
  ApolloProvider,
} from "@apollo/client";

import './App.css';
import { client } from "./Client/Client"
import { Header } from "./Components/Header"
import { ContentContainer } from "./Components/ContentContainer"
import { GetZipInfoQueryProvider } from "./Containers/Contexts/GetZipInfoContext"

function App() {
  return (
    <ApolloProvider client={client}>
      <GetZipInfoQueryProvider>
        <Header/>
        <ContentContainer/>
      </GetZipInfoQueryProvider>
    </ApolloProvider>
  );
}

export default App;
