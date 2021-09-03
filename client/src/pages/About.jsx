import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const About = () => {
  return (
    <section id="about">
      <Container style={{ paddingTop: "10rem" }}>
        <Typography
          align="center"
          variant="h2"
          style={{ fontFamily: "'Courgette', cursive" }}
        >
          {"About"}
        </Typography>
        <Container style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
          <p style={{ fontSize: "1.5em" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus
            venenatis lectus magna fringilla urna porttitor rhoncus dolor purus.
            Orci sagittis eu volutpat odio facilisis mauris sit amet massa.
            Lectus mauris ultrices eros in cursus turpis massa tincidunt dui.
            Lectus vestibulum mattis ullamcorper velit. Massa sed elementum
            tempus egestas sed sed risus. Lectus arcu bibendum at varius vel.
            Nisi est sit amet facilisis. Hac habitasse platea dictumst quisque.
            Ultrices gravida dictum fusce ut. Ultrices vitae auctor eu augue ut
            lectus arcu. Purus semper eget duis at tellus at urna condimentum
            mattis. Mauris sit amet massa vitae. Quam elementum pulvinar etiam
            non quam lacus suspendisse. Ac orci phasellus egestas tellus rutrum
            tellus pellentesque eu tincidunt. Faucibus scelerisque eleifend
            donec pretium vulputate sapien nec sagittis.
          </p>
          <p style={{ fontSize: "1.5em" }}>
            Enim tortor at auctor urna nunc id cursus. Massa enim nec dui nunc.
            Nec ullamcorper sit amet risus nullam eget felis eget nunc. Viverra
            vitae congue eu consequat ac felis donec et odio. Gravida arcu ac
            tortor dignissim. Malesuada pellentesque elit eget gravida cum.
            Scelerisque purus semper eget duis at tellus at. Eget magna
            fermentum iaculis eu non diam phasellus vestibulum. Sit amet nisl
            suscipit adipiscing bibendum est ultricies. Sit amet aliquam id diam
            maecenas ultricies. Ultricies integer quis auctor elit sed vulputate
            mi. Sem integer vitae justo eget.
          </p>
          <p style={{ fontSize: "1.5em" }}>
            Felis eget nunc lobortis mattis aliquam faucibus. Interdum
            consectetur libero id faucibus nisl tincidunt eget. Duis ultricies
            lacus sed turpis tincidunt id. Etiam dignissim diam quis enim. Amet
            risus nullam eget felis eget nunc. Neque aliquam vestibulum morbi
            blandit cursus risus at ultrices. Elementum eu facilisis sed odio
            morbi quis commodo odio aenean. Nibh sed pulvinar proin gravida
            hendrerit lectus a. Tristique nulla aliquet enim tortor at auctor
            urna nunc. Parturient montes nascetur ridiculus mus mauris vitae
            ultricies leo integer. Purus semper eget duis at tellus at urna.
            Ultrices tincidunt arcu non sodales neque sodales ut etiam sit.
            Egestas erat imperdiet sed euismod nisi porta.
          </p>
        </Container>
      </Container>
    </section>
  );
};

export default About;
