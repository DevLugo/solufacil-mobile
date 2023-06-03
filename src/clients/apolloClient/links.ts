import { RetryLink } from '@apollo/client/link/retry';
import { onError } from '@apollo/client/link/error';
import { setContext } from "@apollo/client/link/context";
import { SOLUFACIL_API_URL } from '../../constants';
import { createHttpLink } from '@apollo/client';
import { getAuthentication } from './auth';

const Url = SOLUFACIL_API_URL;

export const retryLink = new RetryLink({
    attempts: {
      max: 4,
    },
  });

export const httpLink = createHttpLink({
    uri: `${Url}/graphql`,
});

export const errorLink =  onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    console.log(networkError)
      if (graphQLErrors) {
          for (let err of graphQLErrors) {
              if (err.message.includes('AnonymousUser')) {
                  //handleLogoutWithoutHook()
                  return
              }
              if (err.message.includes('Signature has expired')) {
                  //handleLogoutWithoutHook()
              }
              console.log("DRAGONSITO")
              console.log(err.message)
          }
      }
      return forward(operation)
  }
);

export const authLink = setContext(async (_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
      headers: {
          ...headers,
          authorization: await getAuthentication(),
        },
  };
});