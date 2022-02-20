import UserModels from "@models/userModels";

//function to get user's previously loaded information
const getPreloadedState =(states={})=> {
    let state = states;
    //Check the status of the browser window
    if (typeof window !== "undefined") {
        const userInfo = localStorage.getItem("user");
        if (userInfo) {
            state = {
                services:{
                    user: {
                        info: new UserModels(JSON.parse(userInfo)),
                    }
                }
            }
        }else{
            state={
                services:{
                    user: {
                        info: new UserModels({}),
                    }
                }
            }
        }
    }

    return state;
}

export { getPreloadedState };