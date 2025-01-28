import ServerComponentPage from "../server-component/page";
import ClientComponent from "../client-component/page";
import Header from "../props/page";
import UserProfile from "../multi-props/page";

export default function ShoppingPage(){
    return (
        <>
            <div>Header and Props</div>
            <Header title="Shopping Page" />

            <ServerComponentPage /> 

            <ClientComponent />

            <div>Multi Props</div>
            <UserProfile name="Oat" age={25} email="oat@gmail.com" isAdmin={true}/>
        </>
    );
}