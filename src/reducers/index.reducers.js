
import DefaultAvatar from "../../images/photo.png";
import AvatarMahdi from "../../images/mahdi.png";

const fakeData = {
  Avatar: DefaultAvatar,
  fullName: "Alex Smith",
  specialities: ["Web Designer", "Frontend-developer"],
  socialLinks: {
    twitter: "#",
    youtube: "#",
    instagram: "#",
    facebook: "#",
  },
  aboutme: ` Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor
  volutpat ac. Duis nulla enim, condimentum nec ultricies.`,
  personinformation: {
    Age: 29,
    Residence: "USA",
    Address: "Los Angles - USA",
    "e-mail": "email@example.com",
    Phone: "+0123 123 456 789",
    Freelance: "Available",
  },
};

//////////////////////////////////////////////////////////////////

const mahdiData = {
  Avatar: AvatarMahdi,
  fullName: "Mahdi Robatjazi",
  specialities: ["Web Designer", "Software-Enginner", "Frontend-developer"],
  socialLinks: {
    twitter: "https://twitter.com/",
    youtube: "https://youtube.com/",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  aboutme: `سلام بچه هامن مهدی رباط جزی ام _ این متن تستی رو برای این تمرین درنظر گرفتم 
            امیدوارم از کارم خوشتون بیاد`,
  personinformation: {
    Age: 22,
    Residence: "IR",
    Address: "Tehran - IRAN",
    "e-mail": "realmehdi1999m@gmail.com",
    Phone: "09046464180",
    Freelance: "Available",
  },
};



function stateAppChangerReducer(state = fakeData ,action){

	switch(action.type){
		case "mahdiInfo":
			// نوع  1
			return Object.assign({} , state , mahdiData)

		case "fakeInfo":
			// نوع  2
			return {...state , ...fakeData}

		default:
			return state
	}
}


function stateColorChangeReducer(state={colorCode : "#ffc107"} , action){

	return {
		colorCode : action.payload
	}

}



import {combineReducers} from 'redux'

const rootReducers = combineReducers({
	data : stateAppChangerReducer,
	color : stateColorChangeReducer
})


export default rootReducers