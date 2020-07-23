import React from "react";
import PersonList from './PersonList'
function NameList() {
  const name = [
  {id:1,
    name:"skoll",
    pass:"pass1"
  },
  {id:2,
    name:"skoll",
    pass:"pass2"
  },
  {id:3,
    name:"skoll",
    pass:"pass3"
  },
  {id:4,
    name:"skoll",
    pass:"pass4"
  }];

  const nameList = name.map(name=><PersonList key ={name.id} name={name}></PersonList>);
  return <div>{nameList}</div>;
}

export default NameList;
