// Omit<K,T> 基于已经声明的类型进行属性剔除获得新类型

// type Omit=Pick<T,Exclude<keyof T,K>>
type User = {
  id: string;
  name: string;
  email: string;
  };
  type UserWithoutEmail = Omit<User, "email">;// UserWithoutEmail ={id: string;name: string;}

