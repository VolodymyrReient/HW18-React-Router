import React from "react";

import Publication from "./Publication";

const ANAKIN_IMAGE = <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg" alt="avatar"/>;
const RAY_IMAGE = <img src="https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale" alt="post"/>;
const GROGU_IMAGE = <img src="https://s13.pikabu.ru/post_img/2020/12/19/10/1608400469127029114.jpg" alt="post"/>;

const makePublication = () => {
    return(
        <div className="flex">
      <Publication avatar={ANAKIN_IMAGE} name={"Anakin Skywalker"} nickname="@dart_vader" date={"· 26 лют."}
      content="WTF? Who is Ray? Why she is Skywalker? Luke...?" image={RAY_IMAGE}
      />
      <Publication avatar={ANAKIN_IMAGE} name={"Anakin Skywalker"} nickname="@dart_vader" date={"· 27 лют."}
      content="WTF? Who is Grogu? Why he is Jedi? Luke...?" image={GROGU_IMAGE}
      />
      </div>
    )
}

export default makePublication;