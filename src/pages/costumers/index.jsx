import Header from "@/componetnts/costumers/header";
import Costumer from "@/componetnts/index/Costumers";

function Costumers() {
    
    return (
        <div className=" w-[100vw] flex flex-col items-center">
            <Header/>
            <Costumer/>
        </div>
    );
}

export default Costumers;