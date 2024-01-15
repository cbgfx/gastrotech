// WHERE WE KEEP TRACK OF PROPER CONSTANTS
export const APPVERSION = 0.3; //VER: UPDATE THIS SERVER SIDE TOO
export const LOGOSMALL = "/assets/logoSmall.png";
export const LOGO = "/assets/logo.png";

export const SvgIconType = {
  Name: "Name",
  Edit: "Edit",
  Delete: "Delete",
  Duplicate: "Duplicate",
  Profile: "Profile",
  Add: "Add",
  Email: "E-Mail",
  PassKey: "Password",
  UserName: "UserName",
};

export const UserField = {
  Username: "username",
  Name: "name",
  Email: "email",
  shopID: "shopID",
};


export function textPass(input, password) {
  if (input.toLowerCase() === password.toLowerCase()) {
    return true;
  }
}

export const DISCOUNT = 0.15; //Discount given on Pre-Gel Items
export const KGBASE = 7; //We produce for 7L
export const KGPROD = 10; //10L are actually produced
export const WHITEBASE = 0; //Cost of White Base
