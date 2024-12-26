import {MsalProvider, AuthenticatedTemplate, useMsal, UnauthenticatedTemplate} from '@azure/msal-react';
import{Container} from 'react-bootstrap'
import{PageLayout} from './components/PageLayout';
//import {IdTokenData} from './components/DataDisplay';

const MainContent = () =>{
  const {instance} = useMsal();
  const activeAccount = instance.getActiveAccount();

  return(
    <div className = "App">
      <AuthenticatedTemplate>
        {activeAccount ? (
          <Container>
           {/* <IdTokenData idTokenClaims={activeAccount.idTokenClaims}/> */}
          </Container>
        ): null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
       <center><h5>Please sign-in</h5></center> 
      </UnauthenticatedTemplate>
    </div>
  );
};


const App = ({instance}) => {
  return (
    <MsalProvider instance={instance}>
      <PageLayout>
        <MainContent />
      </PageLayout>
    </MsalProvider>
  );
};

export default App;



