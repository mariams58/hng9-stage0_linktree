import React from "react";
import LinkButton from "./LinkButton";

function App() {
  return (
    <div>
      <LinkButton
      name="Twitter Link"
      title="btn.id"
      link="https://training.zuri.team/"
      />
      <LinkButton
      name="Zuri Team"
      title="btn__zuri"
      link="https://training.zuri.team/"
      />
      <LinkButton
      name="Zuri Books"
      title="books"
      link="http://books.zuri.team"
      />
      <LinkButton
      name="Python Books"
      title="book__python"
      link="https://books.zuri.team/python-for-beginners?ref_id=DeeC0dez58"
      />
      <LinkButton
      name="Background Check for Coders"
      title="pitch"
      link="https://background.zuri.team"
      />
      <LinkButton
      name="Design Books"
      title="book__design"
      link="https://books.zuri.team/design-rules"
      />
      
    </div>
  );
}

export default App;
