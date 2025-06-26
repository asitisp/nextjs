import "next-auth"

declare module "next-auth" {

    interface User {
    _id?: string;
    role?: string;
    username?: string;
    email?: string;
  } 

  interface Session {
    user: {
        _id?: string;
      username?: string;
      email?: string;
      image?: string;
      role?: string; // 👈 Add this
    }; 
}
  
}

declare module "next-auth/jwt" {
  interface JWT {
    _id?: string;
    role?: string;
    username?: string;
    email?: string;
  }
}
