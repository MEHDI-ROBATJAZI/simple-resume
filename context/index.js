import {createContext} from "react"

export const AvatarLink = createContext("")
export const FullName = createContext("")
export const Abilities = createContext([])
export const SocialLinks = createContext({})
export const AboutMe = createContext("")
export const PersonInformation = createContext({})

export const DataMode = createContext(()=>{})

export const Theme = createContext({color:"" , changeTheme:()=>{} }) 