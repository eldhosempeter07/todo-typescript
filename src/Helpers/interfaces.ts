export type UserProps = {
    loading: boolean;
    userList: {
      createdAt: string;
      email: string;
      id: string;
      name: string;
    }[];
    error: string;
  };

  export type TodosProps = {
    loading: boolean;
    todo: {
      createdAt: string;
      name: string;
      completed: boolean;
      createdBy: string;
      id: string;
    };
    todoList: {
      name: string;
      completed: boolean;
      createdBy: string;
      id: string;
    }[];
    error: string;
  };

  
export interface RegisterProps{
  data:{
      email: string,
      password: string,
  },
  callback:()=>void
}


export interface GetUsers {
    users:{

        "createdAt": string
        "name": string,
        "email": string,
        "id": string
    }[]
}



export interface AddTodoProps{
  data:{
      name: string,
      completed:boolean,
      createdBy: string,
  },
  callback:()=>void
}

export  interface getTodo{
  data:{
      id:string        
  }
 
}

export interface deleteTodoProps {
  id:string,
  callback:()=>void
 }


 export interface updateTodoProps{
  data:{
      name: string;
completed: boolean;
  },
  id:string,
  callback:()=>void
 
}



export interface GetTodosProps{
  data:{
      name: string,
      completed:boolean,
      createdBy: string,
  }[],
}

export interface GetTodoByIdProps{
  data:{
      
          "createdAt": string,
          "name": string,
          "completed": boolean,
          "createdBy": string,
          "id": string
      
  },
}
