import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth:{
        clientId:'20570f43-93f0-432d-a1ca-7c1bb86ccb9a',
        authority:'https://login.microsoftonline.com/06dacfcb-8882-4ce6-962f-6dcb627a7e4e',
        redirectUri:'http://localhost:3000',
        postLogoutRedirectUri:'http://localhost:3000/redirect',
        navigateToLoginRequestUrl: false,
    },
    cache:{
        cacheLocation:'sessionStorage',
        storeAuthStateInCookie:false,
    },
    system:{
        loggerOptions:{
            loggerCallback:(level, message, containsPii) => {
                if (containsPii) {
                    return;
                } 
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

export const loginRequest = {
    scopes:[]
};
export const silentRequest = {
    scopes:["openid", "profile"],
    loginHint:"example@domain.net"
};