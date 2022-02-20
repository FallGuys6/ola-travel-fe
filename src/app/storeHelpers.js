import UserModels from "@models/userModels";
//function to get user's previously loaded information

const getPreloadedState =(state={})=> {
    let initialState = state;

    //Check the status of the browser window
    if(typeof window !== "undefined"){
        const getInfo = localStorage.getItem("user");
        if(getInfo){
            state= {
                user:{
                    info: new UserModels(JSON.parse(getInfo)),
                }
            }
        }
    }else{
        state={
            user:{
                info: new UserModels({}),
            }
        }
    }
}

export { getPreloadedState };