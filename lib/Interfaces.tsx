export type dataforproduct = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  rating: {
    rate: number;
    count: number;
  };
  available_color: string[];
  available_size: string[];
  mrp: number;
};
export interface dataforproductwithmetadata extends dataforproduct {
  color: string;
  size: string;
  count: number;
}


export interface API_UpdatePassword_Body{
  user_email:string,
  user_password:string,
  token:string
}
export interface GoogleAccountBody{
  email:string,
  name:string,
  given_name:string;
  picture:string;
  key:string;
}
export interface Emailsendinterface {
  to: string;
  Subject: string;
  Body: {
    Firstname: string;
    verifyurl: string;
  };
}



export interface errortype{
  error: boolean;
  message: string;
} 