import { UserModel } from "../stores/User/types"

export const setPhotoURL : any = (state: UserModel) => {
    if(!state?.photoURL) return  require("../assets/imgs/genericProfile.png")

   if(!!state?.photoURL && !!state.photoURL.toString().includes("file") || state.photoURL.toString().includes("data:image")) {
     return {uri: state.photoURL}
   }

   return state.photoURL
  }