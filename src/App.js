import * as React from "react";
import Card from "./components/Card";

export default function App() {
  return (
    <Card
      darkMode
      image="https://placehold.co/317"
      name="Lorem Ipsum"
      role="Front-end Developer"
      site="mysite.com"
      email="email@email.com"
      linkedin="linkedin"
      about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum dapibus nunc. Mauris in lectus nec nunc finibus laoreet convallis vel magna. In ligula turpis, tincidunt eget ex id, pulvinar mollis sapien. In leo massa, eleifend ut ipsum in, auctor tempor purus. Praesent rutrum fermentum velit, ac ornare nulla consequat eget. Aliquam dui ligula, dictum quis erat ac, iaculis euismod tellus. Aenean sed vehicula neque, vitae dictum nibh. Morbi non porta arcu. Suspendisse quis nisl vel tellus rhoncus suscipit vitae non lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In volutpat urna lorem, id bibendum dui vehicula at. Praesent ut nisi et turpis commodo lobortis. Sed tincidunt dapibus sapien, ac volutpat ipsum sodales in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      interests="Curabitur finibus scelerisque lectus. Curabitur interdum ante ac est venenatis hendrerit. Aliquam ornare, risus placerat consectetur pellentesque, dolor sem consectetur est, eget varius eros nisl nec est. Donec ullamcorper lacus eu bibendum luctus. Fusce luctus sem quis lacus dapibus accumsan. Vivamus at nibh id nulla imperdiet hendrerit non non nisl. Suspendisse potenti. Ut arcu ante, laoreet eu dapibus eget, accumsan id mauris. Praesent massa tellus, dictum eu fermentum quis, ornare at lorem. Sed scelerisque tincidunt ex quis pretium. Quisque congue semper volutpat. Ut sit amet vehicula ex."
      twitter="twitter"
      facebook="facebook"
      instagram="instagram"
      github="github"
    />
  );
}
