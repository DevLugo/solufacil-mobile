import { authLink, httpLink } from "./links";
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
// Main application client
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    // Optional constructor fields
    defaultOptions: {
      watchQuery: {
          fetchPolicy: "cache-and-network",
      },
  },
  });
  
export const refreshingClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
  
  export { client as default }