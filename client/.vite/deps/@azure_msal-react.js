import {
  AccountEntity,
  AuthError,
  EventMessageUtils,
  EventType,
  InteractionRequiredAuthError,
  InteractionStatus,
  InteractionType,
  Logger,
  OIDC_DEFAULT_SCOPES,
  WrapperSKU,
  stubbedPublicClientApplication
} from "./chunk-NCONODGC.js";
import "./chunk-2SEESAY2.js";
import {
  require_react
} from "./chunk-TVFQMRVC.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@azure/msal-react/dist/MsalContext.js
var React = __toESM(require_react(), 1);
var defaultMsalContext = {
  instance: stubbedPublicClientApplication,
  inProgress: InteractionStatus.None,
  accounts: [],
  logger: new Logger({})
};
var MsalContext = React.createContext(defaultMsalContext);
var MsalConsumer = MsalContext.Consumer;

// node_modules/@azure/msal-react/dist/MsalProvider.js
var import_react = __toESM(require_react(), 1);

// node_modules/@azure/msal-react/dist/utils/utilities.js
function getChildrenOrFunction(children, args) {
  if (typeof children === "function") {
    return children(args);
  }
  return children;
}
function accountArraysAreEqual(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  const comparisonArray = [...arrayB];
  return arrayA.every((elementA) => {
    const elementB = comparisonArray.shift();
    if (!elementA || !elementB) {
      return false;
    }
    return elementA.homeAccountId === elementB.homeAccountId && elementA.localAccountId === elementB.localAccountId && elementA.username === elementB.username;
  });
}
function getAccountByIdentifiers(allAccounts, accountIdentifiers) {
  if (allAccounts.length > 0 && (accountIdentifiers.homeAccountId || accountIdentifiers.localAccountId || accountIdentifiers.username)) {
    const matchedAccounts = allAccounts.filter((accountObj) => {
      if (accountIdentifiers.username && accountIdentifiers.username.toLowerCase() !== accountObj.username.toLowerCase()) {
        return false;
      }
      if (accountIdentifiers.homeAccountId && accountIdentifiers.homeAccountId.toLowerCase() !== accountObj.homeAccountId.toLowerCase()) {
        return false;
      }
      if (accountIdentifiers.localAccountId && accountIdentifiers.localAccountId.toLowerCase() !== accountObj.localAccountId.toLowerCase()) {
        return false;
      }
      return true;
    });
    return matchedAccounts[0] || null;
  } else {
    return null;
  }
}

// node_modules/@azure/msal-react/dist/packageMetadata.js
var name = "@azure/msal-react";
var version = "3.0.15";

// node_modules/@azure/msal-react/dist/MsalProvider.js
var MsalProviderActionType = {
  UNBLOCK_INPROGRESS: "UNBLOCK_INPROGRESS",
  EVENT: "EVENT"
};
var reducer = (previousState, action) => {
  const { type, payload } = action;
  let newInProgress = previousState.inProgress;
  switch (type) {
    case MsalProviderActionType.UNBLOCK_INPROGRESS:
      if (previousState.inProgress === InteractionStatus.Startup) {
        newInProgress = InteractionStatus.None;
        payload.logger.info("MsalProvider - handleRedirectPromise resolved, setting inProgress to 'none'");
      }
      break;
    case MsalProviderActionType.EVENT:
      const message = payload.message;
      const status = EventMessageUtils.getInteractionStatusFromEvent(message, previousState.inProgress);
      if (status) {
        payload.logger.info(`MsalProvider - ${message.eventType} results in setting inProgress from ${previousState.inProgress} to ${status}`);
        newInProgress = status;
      }
      break;
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
  if (newInProgress === InteractionStatus.Startup) {
    return previousState;
  }
  const currentAccounts = payload.instance.getAllAccounts();
  if (newInProgress !== previousState.inProgress && !accountArraysAreEqual(currentAccounts, previousState.accounts)) {
    return {
      ...previousState,
      inProgress: newInProgress,
      accounts: currentAccounts
    };
  } else if (newInProgress !== previousState.inProgress) {
    return {
      ...previousState,
      inProgress: newInProgress
    };
  } else if (!accountArraysAreEqual(currentAccounts, previousState.accounts)) {
    return {
      ...previousState,
      accounts: currentAccounts
    };
  } else {
    return previousState;
  }
};
function MsalProvider({ instance, children }) {
  (0, import_react.useEffect)(() => {
    instance.initializeWrapperLibrary(WrapperSKU.React, version);
  }, [instance]);
  const logger = (0, import_react.useMemo)(() => {
    return instance.getLogger().clone(name, version);
  }, [instance]);
  const [state, updateState] = (0, import_react.useReducer)(reducer, void 0, () => {
    return {
      inProgress: InteractionStatus.Startup,
      accounts: []
    };
  });
  (0, import_react.useEffect)(() => {
    const callbackId = instance.addEventCallback((message) => {
      updateState({
        payload: {
          instance,
          logger,
          message
        },
        type: MsalProviderActionType.EVENT
      });
    });
    logger.verbose(`MsalProvider - Registered event callback with id: ${callbackId}`);
    instance.initialize().then(() => {
      instance.handleRedirectPromise().catch(() => {
        return;
      }).finally(() => {
        updateState({
          payload: {
            instance,
            logger
          },
          type: MsalProviderActionType.UNBLOCK_INPROGRESS
        });
      });
    }).catch(() => {
      return;
    });
    return () => {
      if (callbackId) {
        logger.verbose(`MsalProvider - Removing event callback ${callbackId}`);
        instance.removeEventCallback(callbackId);
      }
    };
  }, [instance, logger]);
  const contextValue = {
    instance,
    inProgress: state.inProgress,
    accounts: state.accounts,
    logger
  };
  return import_react.default.createElement(MsalContext.Provider, { value: contextValue }, children);
}

// node_modules/@azure/msal-react/dist/components/AuthenticatedTemplate.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@azure/msal-react/dist/hooks/useMsal.js
var import_react2 = __toESM(require_react(), 1);
var useMsal = () => (0, import_react2.useContext)(MsalContext);

// node_modules/@azure/msal-react/dist/hooks/useIsAuthenticated.js
var import_react3 = __toESM(require_react(), 1);
function isAuthenticated(allAccounts, matchAccount) {
  if (matchAccount && (matchAccount.username || matchAccount.homeAccountId || matchAccount.localAccountId)) {
    return !!getAccountByIdentifiers(allAccounts, matchAccount);
  }
  return allAccounts.length > 0;
}
function useIsAuthenticated(matchAccount) {
  const { accounts: allAccounts, inProgress } = useMsal();
  const isUserAuthenticated = (0, import_react3.useMemo)(() => {
    if (inProgress === InteractionStatus.Startup) {
      return false;
    }
    return isAuthenticated(allAccounts, matchAccount);
  }, [allAccounts, inProgress, matchAccount]);
  return isUserAuthenticated;
}

// node_modules/@azure/msal-react/dist/components/AuthenticatedTemplate.js
function AuthenticatedTemplate({ username, homeAccountId, localAccountId, children }) {
  const context = useMsal();
  const accountIdentifier = (0, import_react4.useMemo)(() => {
    return {
      username,
      homeAccountId,
      localAccountId
    };
  }, [username, homeAccountId, localAccountId]);
  const isAuthenticated2 = useIsAuthenticated(accountIdentifier);
  if (isAuthenticated2 && context.inProgress !== InteractionStatus.Startup) {
    return import_react4.default.createElement(import_react4.default.Fragment, null, getChildrenOrFunction(children, context));
  }
  return null;
}

// node_modules/@azure/msal-react/dist/components/UnauthenticatedTemplate.js
var import_react5 = __toESM(require_react(), 1);
function UnauthenticatedTemplate({ username, homeAccountId, localAccountId, children }) {
  const context = useMsal();
  const accountIdentifier = (0, import_react5.useMemo)(() => {
    return {
      username,
      homeAccountId,
      localAccountId
    };
  }, [username, homeAccountId, localAccountId]);
  const isAuthenticated2 = useIsAuthenticated(accountIdentifier);
  if (!isAuthenticated2 && context.inProgress !== InteractionStatus.Startup && context.inProgress !== InteractionStatus.HandleRedirect) {
    return import_react5.default.createElement(import_react5.default.Fragment, null, getChildrenOrFunction(children, context));
  }
  return null;
}

// node_modules/@azure/msal-react/dist/components/MsalAuthenticationTemplate.js
var import_react8 = __toESM(require_react(), 1);

// node_modules/@azure/msal-react/dist/hooks/useMsalAuthentication.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@azure/msal-react/dist/hooks/useAccount.js
var import_react6 = __toESM(require_react(), 1);
function getAccount(instance, accountIdentifiers) {
  if (!accountIdentifiers || !accountIdentifiers.homeAccountId && !accountIdentifiers.localAccountId && !accountIdentifiers.username) {
    return instance.getActiveAccount();
  }
  return getAccountByIdentifiers(instance.getAllAccounts(), accountIdentifiers);
}
function useAccount(accountIdentifiers) {
  const { instance, inProgress, logger } = useMsal();
  const [account, setAccount] = (0, import_react6.useState)(() => {
    if (inProgress === InteractionStatus.Startup) {
      return null;
    } else {
      return getAccount(instance, accountIdentifiers);
    }
  });
  (0, import_react6.useEffect)(() => {
    if (inProgress !== InteractionStatus.Startup) {
      setAccount((currentAccount) => {
        const nextAccount = getAccount(instance, accountIdentifiers);
        if (!AccountEntity.accountInfoIsEqual(currentAccount, nextAccount, true)) {
          logger.info("useAccount - Updating account");
          return nextAccount;
        }
        return currentAccount;
      });
    }
  }, [inProgress, accountIdentifiers, instance, logger]);
  return account;
}

// node_modules/@azure/msal-react/dist/error/ReactAuthError.js
var ReactAuthErrorMessage = {
  invalidInteractionType: {
    code: "invalid_interaction_type",
    desc: "The provided interaction type is invalid."
  },
  unableToFallbackToInteraction: {
    code: "unable_to_fallback_to_interaction",
    desc: "Interaction is required but another interaction is already in progress. Please try again when the current interaction is complete."
  }
};
var ReactAuthError = class _ReactAuthError extends AuthError {
  constructor(errorCode, errorMessage) {
    super(errorCode, errorMessage);
    Object.setPrototypeOf(this, _ReactAuthError.prototype);
    this.name = "ReactAuthError";
  }
  static createInvalidInteractionTypeError() {
    return new _ReactAuthError(ReactAuthErrorMessage.invalidInteractionType.code, ReactAuthErrorMessage.invalidInteractionType.desc);
  }
  static createUnableToFallbackToInteractionError() {
    return new _ReactAuthError(ReactAuthErrorMessage.unableToFallbackToInteraction.code, ReactAuthErrorMessage.unableToFallbackToInteraction.desc);
  }
};

// node_modules/@azure/msal-react/dist/hooks/useMsalAuthentication.js
function useMsalAuthentication(interactionType, authenticationRequest, accountIdentifiers) {
  const { instance, inProgress, logger } = useMsal();
  const isAuthenticated2 = useIsAuthenticated(accountIdentifiers);
  const account = useAccount(accountIdentifiers);
  const [[result, error], setResponse] = (0, import_react7.useState)([null, null]);
  const mounted = (0, import_react7.useRef)(true);
  (0, import_react7.useEffect)(() => {
    return () => {
      mounted.current = false;
    };
  }, []);
  const interactionInProgress = (0, import_react7.useRef)(inProgress !== InteractionStatus.None);
  (0, import_react7.useEffect)(() => {
    interactionInProgress.current = inProgress !== InteractionStatus.None;
  }, [inProgress]);
  const shouldAcquireToken = (0, import_react7.useRef)(true);
  (0, import_react7.useEffect)(() => {
    if (!!error) {
      shouldAcquireToken.current = false;
      return;
    }
    if (!!result) {
      shouldAcquireToken.current = false;
      return;
    }
  }, [error, result]);
  const login = (0, import_react7.useCallback)(async (callbackInteractionType, callbackRequest) => {
    const loginType = callbackInteractionType || interactionType;
    const loginRequest = callbackRequest || authenticationRequest;
    switch (loginType) {
      case InteractionType.Popup:
        logger.verbose("useMsalAuthentication - Calling loginPopup");
        return instance.loginPopup(loginRequest);
      case InteractionType.Redirect:
        logger.verbose("useMsalAuthentication - Calling loginRedirect");
        return instance.loginRedirect(loginRequest).then(null);
      case InteractionType.Silent:
        logger.verbose("useMsalAuthentication - Calling ssoSilent");
        return instance.ssoSilent(loginRequest);
      default:
        throw ReactAuthError.createInvalidInteractionTypeError();
    }
  }, [instance, interactionType, authenticationRequest, logger]);
  const acquireToken = (0, import_react7.useCallback)(async (callbackInteractionType, callbackRequest) => {
    const fallbackInteractionType = callbackInteractionType || interactionType;
    let tokenRequest;
    if (callbackRequest) {
      logger.trace("useMsalAuthentication - acquireToken - Using request provided in the callback");
      tokenRequest = {
        ...callbackRequest
      };
    } else if (authenticationRequest) {
      logger.trace("useMsalAuthentication - acquireToken - Using request provided in the hook");
      tokenRequest = {
        ...authenticationRequest,
        scopes: authenticationRequest.scopes || OIDC_DEFAULT_SCOPES
      };
    } else {
      logger.trace("useMsalAuthentication - acquireToken - No request object provided, using default request.");
      tokenRequest = {
        scopes: OIDC_DEFAULT_SCOPES
      };
    }
    if (!tokenRequest.account && account) {
      logger.trace("useMsalAuthentication - acquireToken - Attaching account to request");
      tokenRequest.account = account;
    }
    const getToken = async () => {
      logger.verbose("useMsalAuthentication - Calling acquireTokenSilent");
      return instance.acquireTokenSilent(tokenRequest).catch(async (e) => {
        if (e instanceof InteractionRequiredAuthError) {
          if (!interactionInProgress.current) {
            logger.error("useMsalAuthentication - Interaction required, falling back to interaction");
            return login(fallbackInteractionType, tokenRequest);
          } else {
            logger.error("useMsalAuthentication - Interaction required but is already in progress. Please try again, if needed, after interaction completes.");
            throw ReactAuthError.createUnableToFallbackToInteractionError();
          }
        }
        throw e;
      });
    };
    return getToken().then((response) => {
      if (mounted.current) {
        setResponse([response, null]);
      }
      return response;
    }).catch((e) => {
      if (mounted.current) {
        setResponse([null, e]);
      }
      throw e;
    });
  }, [
    instance,
    interactionType,
    authenticationRequest,
    logger,
    account,
    login
  ]);
  (0, import_react7.useEffect)(() => {
    const callbackId = instance.addEventCallback((message) => {
      switch (message.eventType) {
        case EventType.LOGIN_SUCCESS:
        case EventType.SSO_SILENT_SUCCESS:
          if (message.payload) {
            setResponse([
              message.payload,
              null
            ]);
          }
          break;
        case EventType.LOGIN_FAILURE:
        case EventType.SSO_SILENT_FAILURE:
          if (message.error) {
            setResponse([null, message.error]);
          }
          break;
      }
    });
    logger.verbose(`useMsalAuthentication - Registered event callback with id: ${callbackId}`);
    return () => {
      if (callbackId) {
        logger.verbose(`useMsalAuthentication - Removing event callback ${callbackId}`);
        instance.removeEventCallback(callbackId);
      }
    };
  }, [instance, logger]);
  (0, import_react7.useEffect)(() => {
    if (shouldAcquireToken.current && inProgress === InteractionStatus.None) {
      if (!isAuthenticated2) {
        shouldAcquireToken.current = false;
        logger.info("useMsalAuthentication - No user is authenticated, attempting to login");
        login().catch(() => {
          return;
        });
      } else if (account) {
        shouldAcquireToken.current = false;
        logger.info("useMsalAuthentication - User is authenticated, attempting to acquire token");
        acquireToken().catch(() => {
          return;
        });
      }
    }
  }, [isAuthenticated2, account, inProgress, login, acquireToken, logger]);
  return {
    login,
    acquireToken,
    result,
    error
  };
}

// node_modules/@azure/msal-react/dist/components/MsalAuthenticationTemplate.js
function MsalAuthenticationTemplate({ interactionType, username, homeAccountId, localAccountId, authenticationRequest, loadingComponent: LoadingComponent, errorComponent: ErrorComponent, children }) {
  const accountIdentifier = (0, import_react8.useMemo)(() => {
    return {
      username,
      homeAccountId,
      localAccountId
    };
  }, [username, homeAccountId, localAccountId]);
  const context = useMsal();
  const msalAuthResult = useMsalAuthentication(interactionType, authenticationRequest, accountIdentifier);
  const isAuthenticated2 = useIsAuthenticated(accountIdentifier);
  if (msalAuthResult.error && context.inProgress === InteractionStatus.None) {
    if (!!ErrorComponent) {
      return import_react8.default.createElement(ErrorComponent, { ...msalAuthResult });
    }
    throw msalAuthResult.error;
  }
  if (isAuthenticated2) {
    return import_react8.default.createElement(import_react8.default.Fragment, null, getChildrenOrFunction(children, msalAuthResult));
  }
  if (!!LoadingComponent && context.inProgress !== InteractionStatus.None) {
    return import_react8.default.createElement(LoadingComponent, { ...context });
  }
  return null;
}

// node_modules/@azure/msal-react/dist/components/withMsal.js
var import_react9 = __toESM(require_react(), 1);
var withMsal = (Component) => {
  const ComponentWithMsal = (props) => {
    const msal = useMsal();
    return import_react9.default.createElement(Component, { ...props, msalContext: msal });
  };
  const componentName = Component.displayName || Component.name || "Component";
  ComponentWithMsal.displayName = `withMsal(${componentName})`;
  return ComponentWithMsal;
};
export {
  AuthenticatedTemplate,
  MsalAuthenticationTemplate,
  MsalConsumer,
  MsalContext,
  MsalProvider,
  UnauthenticatedTemplate,
  useAccount,
  useIsAuthenticated,
  useMsal,
  useMsalAuthentication,
  version,
  withMsal
};
/*! Bundled license information:

@azure/msal-react/dist/MsalContext.js:
@azure/msal-react/dist/utils/utilities.js:
@azure/msal-react/dist/packageMetadata.js:
@azure/msal-react/dist/MsalProvider.js:
@azure/msal-react/dist/hooks/useMsal.js:
@azure/msal-react/dist/hooks/useIsAuthenticated.js:
@azure/msal-react/dist/components/AuthenticatedTemplate.js:
@azure/msal-react/dist/components/UnauthenticatedTemplate.js:
@azure/msal-react/dist/hooks/useAccount.js:
@azure/msal-react/dist/error/ReactAuthError.js:
@azure/msal-react/dist/hooks/useMsalAuthentication.js:
@azure/msal-react/dist/components/MsalAuthenticationTemplate.js:
@azure/msal-react/dist/components/withMsal.js:
@azure/msal-react/dist/index.js:
  (*! @azure/msal-react v3.0.15 2025-07-08 *)
*/
//# sourceMappingURL=@azure_msal-react.js.map
