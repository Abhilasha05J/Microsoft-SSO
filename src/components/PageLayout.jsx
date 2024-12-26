import { AuthenticatedTemplate } from '@azure/msal-react';
import { NavigationBar } from './NavigationBar.jsx';

export const PageLayout = (props) => {
    return (
        <>
            <NavigationBar />
            <br />
            <h5>
                <center>Welcome!...</center>
            </h5>
            <br />
            {props.children}
            <br />
            <AuthenticatedTemplate>
               
                    <center>
                        {/* How did we do?
                        <a
                            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR73pcsbpbxNJuZCMKN0lURpUMlRHSkc5U1NLUkxFNEtVN0dEOTFNQkdTWiQlQCN0PWcu"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {' '} */}
                            Signed In
                        {/* </a> */}
                    </center>
              
            </AuthenticatedTemplate>
        </>
    );
}