import { Container } from "reactstrap";
import Callout from "../organisms/Callout";

const Home = (props) => {
  return (
    <Container className="h-100">
      <div className="App row h-100">
        <div class="col-sm-12 align-self-center md:ml-5 md:pl-5">
          <div class="d-flex pt-5 mt-5 justify-content-end">
            <div class="cs-width text-white">
              <Callout />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
