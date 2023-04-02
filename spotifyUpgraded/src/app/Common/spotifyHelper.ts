import { IUser } from './../Interfaces/IUser';
export function SpotifyUserHelper(user: SpotifyApi.CurrentUsersProfileResponse): IUser{
    if (user.images.length != 0) {
        return {
            id: user.id,
            name: user.display_name,
            imageUrl: user.images.pop().url
        }  
    } else {
        return {
            id: user.id,
            name: user.display_name,
            imageUrl: ''
        }  
    }
        
}